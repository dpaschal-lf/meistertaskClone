import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.superCoolColor = "lime";

    this.handleClick = this.handleClick.bind(this);
    this.actionList = ['said','whispered'];
    this.currentAction = 0;
    this.state = {
      action: this.actionList[ this.currentAction ]
    }
  }
  makeADiv(){
    return <div>This is a div!</div>
  }
  handleClick(){
    console.log('in the handle click' , this);
    this.currentAction = 1 - this.currentAction;
    const newState = {
      action: this.actionList[this.currentAction]
    }
    this.setState( newState );
  }
  render() {
    var a = 4;
    var newStyle = {
      'background-color': this.superCoolColor,
    }
    return (
      <div className="App">
        <p onClick={ this.handleClick }> and {this.props.name} {this.state.action} {this.props.matingCall()}</p>
        <h4>{this.props.name}'s butt is {this.props.myButt}</h4>
        <h1 className="bigText">{a} {this.makeADiv()}</h1>

      </div>
    );
  }
}

export default App;










