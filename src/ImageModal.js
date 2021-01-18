import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import Modal from 'react-modal';
import Switch from 'react-switch';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const DOMAIN = "https://imstor.herokuapp.com"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                : '40%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
      "z-index"             :  '1'
    }
  };

class ImageModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isOpen: false,
                        private: false,
                        user: this.props.user?? {}};
        console.log(this.state)
    }

    openModal() {
        this.setState({isOpen: true});
    }
      
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }
     
    closeModal(){
        this.setState({isOpen: false});
    }

    inputStateChange(event) {
        if (event.target.id=== "title"){
            this.setState({
                title: event.target.value
            });
        } else if (event.target.id === "desc"){
            this.setState({
                desc: event.target.value
            });
        } 
    }

    fileChange(e) {
        this.setState({files: e.target.files});
    }

    onSubmit = () => {
        const data = new FormData();
        var files = [];
        for(var x = 0; x< this.state.files.length; x++) {
            data.append('file', this.state.files[x])
            files.push({
                title: this.state.title + (x>0? "_" + x:""),
                path: this.state.files[x].name,
                description: this.state.desc,
                private: this.state.private,
                email: this.state.user.email
            });
            console.log(this.state.files[x]);
        }

        this.closeModal();

        axios.post(DOMAIN + "/api/images/upload", data, {params: files});

        this.props.rerenderParentCallback();
    }

    switchChange(checked) {
        this.setState({private: checked });
    }


    render() {
        return (
            <Col className="col-md-4">
                <button id="btn-add"  type="submit" title="Add Images" onClick={this.openModal.bind(this)}>
                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '10em' }}/>
                </button>
                <Modal
                    isOpen={this.state.isOpen}
                    onAfterOpen={this.afterOpenModal.bind(this)}
                    onRequestClose={this.closeModal.bind(this)}
                    style={customStyles}
                    contentLabel="Example Modal">
                    
                    <form>
                        <h4 id="modal-header"> Add Images</h4>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="" id="title" value={this.state.title} onChange={this.inputStateChange.bind(this)}/>
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea type="text" class="" id="desc" value={this.state.desc} onChange={this.inputStateChange.bind(this)}/>
                        </div>
                        <div class="form-group">
                            <label for="access">Private</label>
                            <Switch id = "privacy" checked={this.state.private} onChange={this.switchChange.bind(this)} />
                        </div>
                        <input  type="file" className="" multiple onChange={this.fileChange.bind(this)}/>
                        <Row> 
                            <button type="button" className="btn btn-success btn-block btn-file" id="file-submit" onClick={this.onSubmit.bind(this)}>Upload</button>
                            <button type="button" className="btn btn-danger btn-block btn-file" id="file-cancel" onClick={this.closeModal.bind(this)}>Close</button> 
                        </Row> 
                    </form>
                </Modal>
            </Col>
        )
    }
  }

export default ImageModal;