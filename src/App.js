import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import './App.css';

const colors = ["green","yellow","red","blue","black","grey","pink","orange","violet","indigo","maroon","goldenrod"]

class App extends Component {
  // styles them up with each lovely new color
  stylePoints = color => ({
    backgroundColor:color,
    borderRadius:40,
    width:50,
    height:50
  });
  // app.js
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spinner Clicker</h1>
        </header>
        <p className="App-intro">
          To win, click every <code>spinner</code> only once.
        </p>
        <Wrapper>
          {colors.map(color=> (
            // make a new spinner component to go here!
            <img src={logo} key={color} className="App-logo" style={this.stylePoints(color)} alt="logo" />
          ))}
        </Wrapper>
      </div>      
    );
  }
}

export default App;
