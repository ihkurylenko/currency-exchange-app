import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { req as getExchangeRates } from '../actions/getExchangeRates';

import { CurrencyBlock } from 'public/features/CurrencyBlock/components/CurrencyBlock';
import { CurrentRatesBlock } from 'public/features/CurrentRatesBlock/components/CurrentRatesBlock';
import { Loader } from 'shared/layouts/Loader/Loader';
import { ExchangesAppStyled } from './styles';

class ExchangesApp extends Component {
  componentDidMount() {
    this.props.getExchangeRates();
  }

  render() {
    const { status } = this.props;

    return (
      <React.Fragment>
        {status === 'REQ' && <Loader />}
        {status === 'GOT' && (
          <ExchangesAppStyled>
            <CurrencyBlock />
            <CurrentRatesBlock />
          </ExchangesAppStyled>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  status: store.getExchangeRates.status
});

const mapDispatchToProps = dispatch => bindActionCreators({ getExchangeRates }, dispatch);

const ExchangesAppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangesApp);

export { ExchangesAppConnect as ExchangesApp };
