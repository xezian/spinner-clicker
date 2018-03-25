import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from './components/Wrapper';
import Spinner from './components/Spinner';
import './App.css';

const colors = [
  {"color":"green","id":1,"clicked":false},
  {"color":"yellow","id":2,"clicked":false},
  {"color":"red","id":3,"clicked":false},
  {"color":"blue","id":4,"clicked":false},
  {"color":"black","id":5,"clicked":false},
  {"color":"grey","id":6,"clicked":false},
  {"color":"pink","id":7,"clicked":false},
  {"color":"orange","id":8,"clicked":false},
  {"color":"violet","id":9,"clicked":false},
  {"color":"indigo","id":10,"clicked":false},
  {"color":"maroon","id":11,"clicked":false},
  {"color":"limegreen","id":12,"clicked":false}
];

class App extends Component {
  // state will be set to the colors array hurray array hurray yay!
  state = {
    colors: colors,
    message: `Better get clickin'`,
    score: 0
  };
  // styles them up with each lovely new color
  addColor = color => ({
    backgroundColor:color,
  });
  firstClick = id => {
    let colors = this.state.colors;
    let score = this.state.score + 1;
    for(let key in colors){
      if(colors[key].id===id){
        colors[key].clicked = true;
      }
    }
    this.setState({ score:score, colors:colors, message:`Good goin'!` });
  }
  reClick = id => {
    let colors = this.state.colors;
    for(let key in colors){
      colors[key].clicked = false;
    }
    this.setState({ colors:colors, score: 0, message:`Woah! Hey, whoopsie. Ya clicked that one already. Startin' ya over again`})
  }
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
        <p className="score">Score: {this.state.score}</p>
        <Wrapper>
          {this.state.colors.map(color=> (
            // make a new spinner component to go here!
            <Spinner
              id={color.id}
              key={color.id}
              logo={logo}
              color={this.addColor(color.color)}
              clicked={color.clicked}
              firstClick={this.firstClick}
              reClick={this.reClick}
            />
          ))}
        </Wrapper>
        <p className="App-intro">
          {this.state.message}
        </p>
      </div>      
    );
  }
}

export default App;
