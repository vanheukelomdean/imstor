import React from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';


function getUsers(user) {
    console.log("ghetUSers");
    return axios.get(`http://localhost:3000/api/users/getUsers`).then(response => {
        console.log(response.data)
      return response.data;
    })
}

function addUser(user) {
    return axios.post(`http://localhost:3000/api/users/addUser`, {params: user}).then(response => {
      return response.data;
    })
}

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            name: "", nameFeedback: {class: "", message: "", valid: false}, 
            pwd1: "", pwd1Feedback: {class: "", message: "", valid: false}, 
            pwd2: "", pwd2Feedback: {class: "", message: "", valid: false},
            email: "", emailFeedback: {class: "", message: "", valid: false},
            redirect: false
        };

        (async () => {
            this.state.users = (await getUsers()).map(e => e.email);
        })();
    }
    
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    inputStateChange(event){
      if (event.target.id==="usr"){
        var usrFeedback = this.state.nameFeedback;
  
        if (event.target.value.length > 0){
            usrFeedback.class = "form-control is-valid";
            usrFeedback.message = "Name is OK";
            usrFeedback.valid = true;
        } else {
            usrFeedback.class = "form-control is-invalid";
            usrFeedback.message = "Please Enter Your Name";
            usrFeedback.valid = false;
        } 
  
        this.setState({
          name: event.target.value,
          nameFeedback: usrFeedback
        });
      }
  
      else if (event.target.id === "pwd"){
        var usrFeedback = this.state.pwd1Feedback;
  
        if (event.target.value.length > 8){
            usrFeedback.class = "form-control is-valid";
            usrFeedback.message = "Password is OK";
            usrFeedback.valid = true;
        } else {
            usrFeedback.class = "form-control is-invalid";
            usrFeedback.message = "Password must be atleast 8 characters";
            usrFeedback.valid = false;
        } 
        
        if (this.state.pwd2.length > 0){
            if (event.target.value !== this.state.pwd2){
                this.setState({pwd2Feedback: {message: "Passwords do not match!", class: "form-control is-invalid", valid: false}});
            }
            else {
                this.setState({pwd2Feedback: {message: "Passwords Match", class: "form-control is-valid", valid: true}});
            }
        }

        this.setState({
          pwd1: event.target.value,
          pwd1Feedback: usrFeedback
        });
      }
  
      else if (event.target.id === "confirm-pwd"){
        var usrFeedback = this.state.pwd2Feedback;
  
        if (event.target.value === this.state.pwd1){
            usrFeedback.class = "form-control is-valid";
            usrFeedback.message = "Passwords Match";
            usrFeedback.valid = true;
        } else {
            usrFeedback.class = "form-control is-invalid";
            usrFeedback.message = "Passwords do not match!";
            usrFeedback.valid = false;
        }
  
        this.setState({
          pwd2: event.target.value,
          pwd2Feedback: usrFeedback
        });
      }
  
      else if (event.target.id === "email"){
        var usrFeedback = this.state.emailFeedback;
        var validEmail = this.validateEmail(event.target.value);
        var uniqueEmail = !this.state.users.includes(event.target.value);
        
        usrFeedback.class = (validEmail && uniqueEmail) ? "form-control is-valid" : "form-control is-invalid";
        usrFeedback.message = (validEmail) ? "Email is OK" : "Please enter a valid Email";
        usrFeedback.message = (uniqueEmail) ? "Email is OK" : "This email is already registered";
        usrFeedback.valid = validEmail && uniqueEmail;

  
        this.setState({
          email: event.target.value,
          emailFeedback: usrFeedback
        });
      }
    }


    handleSubmit(){

        console.log(this.state.nameFeedback.valid, this.state.pwd1Feedback.valid, this.state.pwd2Feedback.valid, this.state.emailFeedback.valid)
        if (this.state.nameFeedback.valid&&this.state.pwd1Feedback.valid&&this.state.pwd2Feedback.valid&&this.state.emailFeedback.valid){
            const user =  {email: this.state.email, 
                                password: this.state.password, 
                                name: this.state.name};

            addUser(user);

            this.setState({redirect: true,
                            user: user});

        } else {
            if (this.state.name.length===0){
                this.setState({nameFeedback: {class:"form-control is-invalid", message: "Enter name"}});
            } if (this.state.pwd1.length===0){
                this.setState({pwd1Feedback: {class:"form-control is-invalid", message: "Enter a password"}});
            } if (this.state.pwd2.length===0){
                this.setState({pwd2Feedback: {class:"form-control is-invalid", message: "Confirm password"}});
            } if (this.state.email.length===0){
                this.setState({emailFeedback: {class:"form-control is-invalid",message: "Enter a valid email"}});
            } 

            this.setState({overallFeedback: {class:"form-control is-invalid", message: "Please fix errors with the form"}});
            setTimeout(function() {
                this.setState({overallFeedback: {class:"", message: ""}});
            }.bind(this), 2500);
        }
    }

    render() {
        console.log(this.state)
      return (
        <div class="container" align="center">
            { this.state.redirect &&
                    <Redirect to= {{
                        pathname: "images"
                    }} />
            }
            <br/>
            <h1 class="text-center">Sign Up</h1>
            <form>
                <div class="form-group required">
                    <label for="usr" class="control-label">Name:</label>
                    <input type="text" class="form-control" id="usr" value={this.state.name} onChange={this.inputStateChange.bind(this)}/>
                    <div id="usrfeedback" class={this.state.nameFeedback.class}>{this.state.nameFeedback.message}</div>
                </div>
                <div class="form-group required">
                    <label for="email" class="control-label">Email:</label>
                    <input type="text" class="form-control" id="email" value={this.state.email} onChange={this.inputStateChange.bind(this)}/>
                    <div id="emailfeedback" class={this.state.emailFeedback.class}>{this.state.emailFeedback.message}</div>
                </div>
                <div class="form-group required">
                    <label for="pwd" class="control-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" value={this.state.pwd1} onChange={this.inputStateChange.bind(this)}/>
                    <div id="usrfeedback" class={this.state.pwd1Feedback.class}>{this.state.pwd1Feedback.message}</div>
                </div>
                <div class="form-group required">
                    <label for="confirm-pwd" class="control-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="confirm-pwd" value={this.state.pwd2} onChange={this.inputStateChange.bind(this)}/>
                    <div id="pwdfeedback" class={this.state.pwd2Feedback.class}>{this.state.pwd2Feedback.message}</div>
                </div>

                <input type="button" value="Sign up" id="signup" class="btn form-btn" onClick={this.handleSubmit.bind(this)} />
            </form>
        </div>
      );
    }
} export default Signup;