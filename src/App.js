import './App.css';
import React, { Component } from 'react';
import Button from './components/Button';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Button title="Click me" content="You are amazing :v"/>
      </div>
    );
  }
}

export default App;
