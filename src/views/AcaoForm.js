import React, { Component } from 'react';
import '../App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';
import { Link } from 'react-router-dom'
import axios from 'axios';

class AcaoForm extends Component{

  state = {
    acao: {
      nome_empresa: "",
      cod_empresa: "",
      taxa_juros: 0,
      tipo: "ON"
    },
    erro: undefined
  }

  componentDidMount(){
    let id = this.props.match.params.id
    if(id) this.getAcao(id)
  }
  
  getAcao = (id) => {
    axios.get(`http://localhost:3000/acoes/${id}.json`, {
      headers: {'token': '123456'}
    }).then((resp) => {
      this.setState({acao: resp.data})
    })
    .catch((err) => {
      this.setState({erro: JSON.stringify(err)})
    })
  } 

  onChange = (e) => {
    let acao = this.state.acao
    acao[e.target.name] = e.target.value
    this.setState({acao: acao})
  }

  salvar = () => {
    if(!this.state.acao._id || this.state.acao._id === ""){
      axios.post('http://localhost:3000/acoes.json', this.state.acao, {
        headers: {'token': '123456'}
      }).then(() => {
        this.props.history.push('/acoes');
      })
      .catch((err) => {
        this.setState({erro: JSON.stringify(err)})
      })
    }
    else{
      axios.put(`http://localhost:3000/acoes/${this.state.acao._id}.json`, this.state.acao, {
        headers: {'token': '123456'}
      }).then(() => {
        this.props.history.push('/acoes');
      })
      .catch((err) => {
        this.setState({erro: JSON.stringify(err)})
      })
    }
  }

  render(){
    return (
      <div>
        <div className="App" id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header></Header>
              <div className="container-fluid alinhamento-esquerda">
                <h1>Ações Million</h1>
                <div>
                  <div className="form-group">
                    <label htmlFor="codigo">Código</label>
                    <input type="codigo" className="form-control" id="codigo" name="cod_empresa" value={this.state.acao.cod_empresa} onChange={this.onChange} placeholder="Digite o código da empresa" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="nome" className="form-control" id="nome" name="nome_empresa" value={this.state.acao.nome_empresa} onChange={this.onChange} placeholder="Digite o nome da empresa" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taxa">Taxa</label>
                    <input type="taxa" className="form-control" id="taxa" name="taxa_juros" value={this.state.acao.taxa_juros} onChange={this.onChange} placeholder="Digite o taxa de juros" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <select className="form-control" id="tipo" value={this.state.acao.tipo} onChange={this.onChange} name="tipo">
                      <option value="ON">Ordinaria</option>
                      <option value="PN">Preferencial</option>
                    </select>
                  </div>
                  { this.state.erro && <div className="alert alert-danger">{this.state.erro}</div> }
                  <button onClick={this.salvar} className="btn btn-primary">Salvar</button>
                  <Link className="btn btn-default" to="/acoes">
                    Cancelar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default AcaoForm;
