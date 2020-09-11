import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component{
  render(){
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Interface
        </div>

        <li className="nav-item">
          <Link className="nav-link" to="/componentes">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/acoes">
            <i className="fas fa-fw fa-folder"></i>
            <span>Ações</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Sidebar;
