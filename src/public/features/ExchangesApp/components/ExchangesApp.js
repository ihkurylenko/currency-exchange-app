import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { req as getExchangeRates } from '../actions/getExchangeRates';
import { ExchangesAppStyled } from './styles';

class ExchangesApp extends Component {
  componentDidMount() {
    this.props.getExchangeRates();
  }

  render() {
    return <ExchangesAppStyled>Main app here</ExchangesAppStyled>
  }

}

const mapStateToProps = store => ({
  status: store.getExchangeRatesReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getExchangeRates }, dispatch);

const ExchangesAppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangesApp);

export { ExchangesAppConnect as ExchangesApp };
