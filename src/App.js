import React, { Component } from 'react';
import './App.css';

import router from  "./router";


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
            { router }
        </div>
      </div>
    );
  }
}

export default App;
