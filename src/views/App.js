import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';

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
      <div>
        <div className="App" id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header></Header>
              <div class="container-fluid">
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
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
