import React from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const DOMAIN = "https://imstor.herokuapp.com"

function login(user) {
    return axios.get(`/api/users/login`, { params: user}).then(response => {
      return response.data;
    })
}

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            email: "", emailFeedback: {class: "", message: ""},
            pwd: "", pwdFeedback: {class: "", message: ""},
            redirect: false, authFeedback: {class: "", message: ""},
            setUser: this.props.setUser
        };
    }

    inputStateChange(event) {
        if (event.target.id=== "usr"){
            this.setState({
                email: event.target.value,
                emailFeedback: {class: "", message: ""}
            });
        } else if (event.target.id === "pwd"){
            this.setState({
                pwd: event.target.value,
                pwdfeedback: {class: "", message: ""}
            });
        }
    }

    clearState() {
        this.setState({
            emailFeedback: {class: "", message: ""},
            pwdFeedback: {class: "", message: ""}
        });
    }

    handleSubmit(){
        this.clearState();
        if (this.state.email.length==0){
            this.setState({
                emailFeedback: {class: "form-control is-invalid", message: "Please enter your email"}
            });
        } 
        else if (this.state.pwd.length == 0){
            this.setState({
                pwdFeedback: {class: "form-control is-invalid", message: "Please enter your password"}
            });
        }  
        else {
            (async () => {
                const res = await login({email: this.state.email, 
                                password: this.state.pwd});
                if (res) {
                    this.setState({
                        redirect: true,
                        user: res
                    });
                    this.state.setUser(this.state.user);
                } else {
                    this.setState({
                        authFeedback: {class: "form-control is-invalid", message: "Incorrect email or password."}
                    });
                }
            })();
        }
        
        
    }

    render() {
      return (
        <div class="container" align="center">
          <br/>
          <h1 class="text-center">Login to access private images</h1>
            { this.state.redirect &&
                    <Redirect to= {{
                        pathname: "images"
                    }} />
            }
            <div id="authfeedback" class={this.state.authFeedback.class}>{this.state.authFeedback.message}</div>    
          <form>
                <div class="form-group">
                    <label for="usr">Email:</label>
                    <input type="text" class="form-control" id="usr" value={this.state.email} onChange={this.inputStateChange.bind(this)}/>
                    <div id="usrfeedback" class={this.state.emailFeedback.class}>{this.state.emailFeedback.message}</div>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" value={this.state.pwd} onChange={this.inputStateChange.bind(this)}/>
                    <div id="pwdfeedback" class={this.state.pwdFeedback.class}>{this.state.pwdFeedback.message}</div>
                </div>
               
                <input type="button" value="Login" id="login" class="btn form-btn" onClick={this.handleSubmit.bind(this)}/>

                <Link to="/signup">
                    <input type="button" value="Sign Up" id="signup" class="btn form-btn" onClick={this.props.changeForm}/>
                </Link>
          </form>
          
        </div>
      );
    }
  } export default Login;