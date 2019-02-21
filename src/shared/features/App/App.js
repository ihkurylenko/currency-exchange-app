import React, { Component } from 'react';
import { Header } from '../../layouts/Header/Header';
import { ExchangesApp } from '../../../public/features/ExchangesApp/ExchangesApp';
import { AppStyled } from './styles';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Header/>
        <ExchangesApp />
      </AppStyled>
    );
  }
}

export default App;
