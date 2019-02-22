import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { req as getExchangeRates } from '../actions/getExchangeRates';

import { CurrencyBlock } from '../../CurrencyBlock/components/CurrencyBlock';
import { CurrentRatesBlock } from '../../CurrentRatesBlock/components/CurrentRatesBlock';
import { ExchangesAppStyled } from './styles';

class ExchangesApp extends Component {
  componentDidMount() {
    this.props.getExchangeRates();
  }

  render() {
    const { status } = this.props;

    return (
      <React.Fragment>
        {status === 'REQ' && (<p>Loading...</p>)}
        {status === 'GOT' && (
          <ExchangesAppStyled>
            <CurrencyBlock/>
            <CurrentRatesBlock/>
          </ExchangesAppStyled>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({
  status: store.getExchangeRatesReducer.status
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getExchangeRates }, dispatch);

const ExchangesAppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangesApp);

export { ExchangesAppConnect as ExchangesApp };
