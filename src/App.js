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
    colors: [],
    message: "",
    score: null
  };
  componentDidMount() {
    this.setState({
      colors: colors,
      message: `Better get clickin'`,
      score: 0
    });
  }
  // styles them up with each lovely new color
  setColor = color => ({
    backgroundColor:color,
  });
  // shuffle impplementation found here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  shuffleSpinners = (colorStain, score, message) => {
    for(let i = colorStain.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      let temp = colorStain[i];
      colorStain[i] = colorStain[j];
      colorStain[j] = temp;
    }
    this.setState({ score:score, colors:colorStain, message:message })
  }
  // found this little gem here: https://stackoverflow.com/questions/1484506/random-color-generator
  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  checkClicks = () => {
    let colorStain = this.state.colors;
    let score = this.state.score;
    for(let key in colorStain){
      if(!colorStain[key].clicked){
        return;
      }
    }
    for(let key in colorStain){
      colorStain[key].clicked = false;
    }
    let randoNewColor = this.getRandomColor();
    colorStain = [...colorStain, {"color":randoNewColor,"id":this.state.colors.length + 1,"clicked":false}]
    this.setState({ score:score, colors:colorStain, message:`Wooooohoooo! You reached the next level.` });
  }
  firstClick = (id) => {
    let colorStain = this.state.colors;
    let score = this.state.score + 1;
    for(let key in colorStain){
      if(colorStain[key].id===id){
        colorStain[key].clicked = true;
      }
    }
    this.setState({ score:score, colors:colorStain, message:`Good goin'!` })
    this.shuffleSpinners(colorStain, score, this.state.message);
    setTimeout(this.checkClicks, 1000);
  }
  reClick = id => {
    let colorStain = this.state.colors;
    for(let key in colors){
      colorStain[key].clicked = false;
    }
    this.setState({ colors:colorStain, score: 0, message:`Woah! Hey, whoopsie. Ya clicked that one already. Startin' ya over again`})
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
              color={this.setColor(color.color)}
              clicked={color.clicked}
              firstClick={this.firstClick}
              reClick={this.reClick}
            />
          ))}
        </Wrapper>
        <p className="App-intro">
          {this.state.message}
        </p>
      <div className="footer">
        © Copyright 2018 Jason A. Leo
      </div> 
      </div>     
    );
  }
}

export default App;
