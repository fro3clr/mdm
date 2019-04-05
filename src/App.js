import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ConfusionMatrix from './components/ConfusionMatrix';
import ScopeSelector from './components/ScopeSelector';

const testMatrix = [
  [1, 2, 3, 5, 5],
  [1, 2, 3, 5, 5],
  [1, 2, 3, 5, 5],
  [1, 2, 3, 5, 5],
  [1, 2, 3, 5, 5],
];

const testTitles = ['Title1', 'Title2', 'Title3'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfusionMatrix data={testMatrix} titles={testTitles} />
        <ScopeSelector initialScopes={{
          Training: true,
          Validation: false,
          Test: true,
        }}/>
      </div>
    );
  }
}

export default App;
