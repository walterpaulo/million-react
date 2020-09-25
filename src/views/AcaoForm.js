import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';
import { Link, useParams, useHistory } from 'react-router-dom'
import api from '../services/api';

const AcaoForm = () => {
  const history = useHistory()
  const {id} = useParams()
  const [acao, setAcao] = useState({
    nome_empresa: "",
    cod_empresa: "",
    taxa_juros: 0,
    tipo: "ON"
  })
    const [erro, setErro] = useState("")

    const getAcao = useCallback((id) => {
      api.get(`/acoes/${id}.json`).then((resp) => {
        setAcao(resp.data)
      })
      .catch((err) => {
        setErro(JSON.stringify(err))
      })
    }, [])
    useEffect(() => {
      if(id) {
        getAcao(id)
      }
    }, [id, getAcao])

  const onChange = useCallback((e) => {
    setAcao({...acao, [e.target.name]: e.target.value})
  }, [acao])

  const salvar = useCallback(() => {
    if(!acao._id || acao._id === ""){
      api.post('acoes.json', acao
      ).then(() => {
        history.push('/acoes');
      })
      .catch((err) => {
        setErro(JSON.stringify(err))
      })
    }
    else{
      api.put(`/acoes/${acao._id}.json`, acao
      ).then(() => {
        history.push('/acoes');
      })
      .catch((err) => {
        setErro(JSON.stringify(err))
      })
    }
  }, [acao, history])

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
                    <input type="codigo" className="form-control" id="codigo" name="cod_empresa" value={acao.cod_empresa} onChange={onChange} placeholder="Digite o código da empresa" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="nome" className="form-control" id="nome" name="nome_empresa" value={acao.nome_empresa} onChange={onChange} placeholder="Digite o nome da empresa" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taxa">Taxa</label>
                    <input type="taxa" className="form-control" id="taxa" name="taxa_juros" value={acao.taxa_juros} onChange={onChange} placeholder="Digite o taxa de juros" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <select className="form-control" id="tipo" value={acao.tipo} onChange={onChange} name="tipo">
                      <option value="ON">Ordinaria</option>
                      <option value="PN">Preferencial</option>
                    </select>
                  </div>
                  { erro && <div className="alert alert-danger">{erro}</div> }
                  <button onClick={salvar} className="btn btn-primary">Salvar</button>
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

export default AcaoForm;
