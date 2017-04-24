import React, { Component } from 'react';
//import React from 'react';
//import React.Component as Component from 'react';
import logo from './logo.svg';
import './App.css';

/*function App () {
  Component.call(this)
}
App.prototype = Object.create(Component.prototype)
App.prototype.render = function () {
  return (
    <div className="....">
  )
}*/
class App extends Component {

  constructor () {
    super()
    this.state = {
      text: '',
      photoAdded: false
    }
  }


  handleChange (event) { //these do not need () in the render method because they are not returning anything. They are event handlers that need onChange or clicks attached
    console.log(event.target.value)
    console.log(this.state)
    this.setState({ text: event.target.value })
  }


  togglePhoto (event) {
  this.setState({ photoAdded: !this.state.photoAdded });
  }


  remainingCharacters () { //this needs () in the render method because it is returning a number
  if (this.state.photoAdded) {
    return 140 - 23 - this.state.text.length;
  } else {
    return 140 - this.state.text.length;
  }
}


  disableCheck () {
    return this.state.text.length === 0 && this.state.photoAdded === false;
  }


  render() {
    return (
      <div className="well clearfix">
        <textarea
          onChange={this.handleChange.bind(this)}
          className="form-control"></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right" disabled={this.disableCheck()}>Tweet</button>
        <button className="btn btn-default pull-right"
        onClick={this.togglePhoto.bind(this)}>
        {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>

        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App
