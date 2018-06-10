import React, { Component } from 'react';
import './App.css';
import './Components/style.css';
import LoanCalculator from './Components/LoanCalculator';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoanCalculator />
      </div>
    );
  }
}

export default App;
