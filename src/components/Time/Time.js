import React, { Component } from 'react';

export default class Time extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000),
    }
  }

  render() {
    return (
      <h1>{this.state.time}</h1>
    )
  }
}