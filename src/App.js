import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Images from './Images';
import Login from './Login';
import SignUp from './SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: null
    };

    this.getInitialState();

    this.setUser = this.setUser.bind(this);


  }

  setUser (user) {
    this.setSelectedOption(this.state);
    this.setState({
        user: user
    });
  }

    getInitialState() {
        console.log("get initial");
        var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;
        return {
            selectedOption: selectedOption
        };
    }

    setSelectedOption (option) {
        localStorage.setItem( 'SelectedOption', option );
        console.log(option);
        this.setState( { selectedOption: option } );
    }

  render() {
    console.log(this.state)
    return (
      <Router>
        <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav style={{position: "fixed"}}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
            <SideNav.Toggle />
            <SideNav.Nav >
                <NavItem eventKey="home">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="login">
                    <NavIcon>
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        User
                    </NavText>
                </NavItem>
                <NavItem eventKey="images">
                    <NavIcon>
                        <FontAwesomeIcon icon={faImages} style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Images
                    </NavText>
                </NavItem>
                <NavItem eventKey="search">
                    <NavIcon>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Search
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

        <main>
          <Route path="/images" render={(props) => (<Images user = {this.state.user} {...props}/>)}/>
          <Route path="/login" render={(props) => (<Login setUser = {this.setUser}/>)}/>
          <Route path="/signup" render={(props) => (<SignUp />)}/>
        </main>
        </React.Fragment>
        )}
        />
      </Router>
    );
  }
}

export default App;