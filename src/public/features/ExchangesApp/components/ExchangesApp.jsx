import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { req as getExchangeRates } from '../actions/getExchangeRates';

import { CurrencyBlock } from 'public/features/CurrencyBlock/components/CurrencyBlock';
import { CurrentRatesBlock } from 'public/features/CurrentRatesBlock/components/CurrentRatesBlock';
import { Loader } from 'shared/layouts/Loader/Loader';
import { Error } from 'shared/layouts/Error/Error';
import { ExchangesAppStyled } from './styles';

const ExchangesApp = ({ getExchangeRates, status }) => {
  React.useEffect(() => getExchangeRates(), []);

  return (
    <ExchangesAppStyled>
      {status === 'GOT' && (
        <React.Fragment>
          <CurrencyBlock />
          <CurrentRatesBlock />
        </React.Fragment>
      )}
      {status === 'REQUEST' && <Loader />}
      {status === 'ERROR' && <Error />}
    </ExchangesAppStyled>
  );
};

const mapStateToProps = ({ getExchangeRates }) => ({
  status: getExchangeRates.status
});

const mapDispatchToProps = dispatch => bindActionCreators({ getExchangeRates }, dispatch);

const ExchangesAppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangesApp);

export { ExchangesAppConnect as ExchangesApp };
