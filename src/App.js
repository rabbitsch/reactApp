import React, { Component } from 'react';

import logo from './logo.svg';
import things from './things';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      name: 'rabbit',
      color: 'fuzzy',
      reason: 'carrots',
      title: 'peoples',


    };

  }

  titleChanger = (newName) =>{
    this.setState ({

      title: newName

    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
  }


  headerTyper = (event) =>{
    this.setState({
      [event.target.title]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Here is my title {this.state.title}</h1>
        <button onClick={() => this.titleChanger('Dog')}>Press dem Button</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is Kevins Practice React</h1>
        </header>
        <things
          name={this.props.name}></things>
        <p className="App-intro"> {this.state.name} always should of been a contender,
          she is of course {this.state.color}

        </p>
        <p>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="type text" type="text" title='title' value={this.state.title} onChange={this.headerTyper}></input>
            <button>Submit Baby</button>
          </form>
      </p>
      </div>
    );
  }
}

export default App;
