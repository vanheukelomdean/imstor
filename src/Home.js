import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = { 
        user: this.props.user,
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
          <h1> Welcome to imstor</h1>
          <h3> An image repository webapp created by Dean Van Heukelom</h3>
          <h5> Take a look at the source code <a href="https://github.com/vanheukelomdean/imstor/">here</a>.</h5>
      </Container>
      )
    }
  }

export default Home;