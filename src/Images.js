import React from 'react';
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment'
import ImageModal from './ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


function encode(data){
  let buf = Buffer.from(data);
  let base64 = buf.toString('base64');
  return base64
}

function getImages(email) {
  return axios.get(`/api/images/viewPublic`, {params: {email: email}}).then(response => {
    return response.data;
  })
}

function remove(filename) {
  return axios.post(`/api/images/remove`, {}, {params: {file: filename}}).then(response => {
    console.log(response.data)
    return response.data;
  })
}

class Images extends React.Component{
  constructor(props){
    super(props);

    this.state = {imgs: [],
                  user: this.props.user?? {},
                  rerender: false
                };

    // refresh callback
    this.rerenderParentCallback =  this.rerenderParentCallback.bind(this),

    getImages(this.state.user.email).then(res => {
      var imgs = []
      for (var i = 0; i < res.records.length; i++) {
        imgs.push({
            record: res.records[i],
            file: res.files[i].Body.data
        });
      }
      this.setState({imgs: imgs});

      console.log(this.state);
    });
  }

  rerenderParentCallback() {
    this.forceUpdate();
  }

  onRemove(index) {
    var array = [...this.state.imgs];
    remove(array[index].record.path);
    array.splice(index, 1);
    this.setState({imgs: array});
  }

  render() {
    return (
      <Container>
          <Row>    
          <ImageModal user={this.state.user} rerenderParentCallback={this.rerenderParentCallback}/>
            {this.state.imgs.map((img, index) => 
              <Col className = "col-md-4">
                  <Card>
                    {
                      img.record.email && img.record.email == this.state.user.email &&
                      <button type="submit" title="Remove Image" className="btn-delete" onClick={this.onRemove.bind(this, index)}>
                        <FontAwesomeIcon icon={faTrash} className="delete" style={{ fontSize: '1.5em' }}/>
                      </button>
                    }
                    <FontAwesomeIcon icon={img.record.private? faEyeSlash: faEye} className="privacy" style={{ fontSize: '1.5em' }}/>
                    <img src={`data:image/jpeg;base64,${encode(img.file)}`} />
                    <Card.Body>
                      <p class = "title">{img.record.title}</p>
                      <p class = "desc">{img.record.description}</p>
                      <p class = "date">{moment(new Date(img.record.date)).format('LLLL')}</p>
                    </Card.Body>
                  </Card>
              </Col>
            )}
          </Row>
      </Container>
      )
    }
  }

export default Images;