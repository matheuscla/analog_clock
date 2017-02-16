import React, { Component } from 'react';
import Clock from './components/clock';
import './App.css';

class App extends Component {
  esconde(){
    let el = document.getElementById('clock');
    el.classList.toggle('hide');
  }

  render() {
    return (

    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Sistema de Gestão Empresarial</span>
          <div className="mdl-layout-spacer"></div>
        </div>
  </header>
  <main className="mdl-layout__content">
    <div className="page-content">
      <button
        className="mdl-button mdl-js-button mdl-button--raised"
        onClick={this.esconde}>
        Esconder Relógio
      </button>
          <Clock />
    </div>
  </main>
</div>



    );
  }
}

export default App;
