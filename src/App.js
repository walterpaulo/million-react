import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste.js';

class App extends Component{

  mostraMensagem = () =>{
    return (
      <div>
        <h4>dsdsds</h4>
        <h1>Aula torne-se</h1>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        <Teste/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.mostraMensagem()}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprendendo react na comunidade do torne-se um programador
  
          </a>
        </header>
      </div>
    );
  }
}

export default App;
