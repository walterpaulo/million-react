import React, { Component } from 'react';
import '../App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';

class Componentes extends Component{
  render(){
    return (
      <div>
        <div className="App" id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header></Header>
              <div class="container-fluid">
                <h1>Página de componentes</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Componentes;
