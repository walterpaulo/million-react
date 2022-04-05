import React, { useCallback, useEffect, useState } from 'react';
import '../App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';
import { useHistory } from 'react-router-dom';
import api from './services/api';

const Acoes = ()=>{
  const navigation = useHistory()
  const [acoes, setAcoes] = useState([])
  // acoes[0] variával
  // acoes[1] altera valor da variável

  const lista = useCallback(() => {
    api.get('acoes.json').then((res) => {
      setAcoes(res.data)
    })
  }, [])

  useEffect(() => {
    lista()
  }, [lista])

  const novo = useCallback(() => {
    navigation.push("/acoes/novo")
  }, [navigation])

  const excluir = (acao) => {
    if(window.confirm("Confirma exclusão?")){
      api.delete(`/acoes/${acao._id}.json`).then((_) => {
        lista()
      })
    }
  }

  const alterar = useCallback((acao) => {
    navigation.push(`/acoes/${acao._id}/editar`)
  },[navigation])



    return (
      <div>
        <div className="App" id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header></Header>
              <div className="container-fluid alinhamento-esquerda">
                <h1>Ações Million</h1>
                <button onClick={novo} className="btn btn-primary">Novo</button>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Taxa</th>
                      <th scope="col">Tipo</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      acoes.map((acao, index) => (
                        <tr key={index}>
                          <td>{acao.cod_empresa}</td>
                          <td>{acao.nome_empresa}</td>
                          <td>{acao.taxa_juros}</td>
                          <td>{acao.tipo}</td>
                          <td>
                            <button onClick={() => { alterar(acao) }} className="btn btn-warning">Editar</button>
                          </td>
                          <td>
                            <button onClick={() => { excluir(acao) }} className="btn btn-danger">Excluir</button>
                          </td>
                        </tr>
                       ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }

export default Acoes;
