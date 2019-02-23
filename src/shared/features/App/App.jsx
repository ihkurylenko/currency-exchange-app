import React, { Component } from 'react';
import { AppHeader } from 'shared/layouts/AppHeader/AppHeader';
import { ExchangesApp } from 'public/features/ExchangesApp/components/ExchangesApp';
import { AppStyled } from './styles';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <AppHeader />
        <ExchangesApp />
      </AppStyled>
    );
  }
}

export default App;
