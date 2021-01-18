import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component{
  constructor(props){
    super(props);

    this.state = { user: this.props.user,
                    redirect: false
                };
  }

  handleSubmit() {
    this.props.setUser(null)
    this.setState({
      redirect: true
    });
  }

  render() {
    return (
      <Container>
        {
          this.state.redirect &&
          <Redirect to="/home"/>
        }
        {
            this.state.user && 
            <div>
                <h4> Logged in as {this.state.user.name}.</h4> 
                <p> Navigate to images page on side bar to store/view images.</p>
                <input type="button" value="Logout" id="login" class="btn form-btn" onClick={this.handleSubmit.bind(this)}/>
            </div>
        }
      </Container>
      )
    }
  }

export default Profile;