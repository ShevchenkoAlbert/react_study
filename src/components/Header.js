import React, { Component } from 'react';
import '../style/header.css';
import logo from '../img/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <div className="logo_div">
            <img src={logo} alt="logo"/>
            <span id="loggedUser"> Hi, guest!</span>
          </div>
          <div className="inputs" id="inputs">
            <input type="text" className="header_input" id="login" placeholder="login"/>
            <input type="password" className="header_input" id="password" placeholder="password"/>
            <input type="button" id="singIn" className="header_input" value="Sing in" onClick={this.onSingInClick}/>
            <span id="loggedUser"></span>
            <input type="button" id="logOut" value="Log Out" onClick={this.onLogOutClick}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
