import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import router from  "./router";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
        <div className="App-header">
            { router }
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
