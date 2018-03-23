import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from './components/Wrapper';
import Spinner from './components/Spinner';
import './App.css';

const colors = [
  {"color":"green","id":1},
  {"color":"yellow","id":2},
  {"color":"red","id":3},
  {"color":"blue","id":4},
  {"color":"black","id":5},
  {"color":"grey","id":6},
  {"color":"pink","id":7},
  {"color":"orange","id":8},
  {"color":"violet","id":9},
  {"color":"indigo","id":10},
  {"color":"maroon","id":11},
  {"color":"limegreen","id":12}
];

class App extends Component {
  // styles them up with each lovely new color
  addColor = color => ({
    backgroundColor:color,
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
            <Spinner 
              id={color.id}
              key={color.id}
              logo={logo}
              color={this.addColor(color.color)}
            />
          ))}
        </Wrapper>
      </div>      
    );
  }
}

export default App;
