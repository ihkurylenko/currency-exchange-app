import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imgDefiner, ratesFilter } from 'shared/core/utils';

import { BlockHeader } from 'shared/layouts/BlockHeader/BlockHeader';
import { EachCurrency } from './EachCurrency/EachCurrency';

import { CurrentRatesBlockStyled, Content } from './styles';

class CurrentRatesBlock extends Component {
  renderEachRate = arr =>
    arr.map((item, index) => (
      <EachCurrency img={imgDefiner(item.currency)} key={index} item={item.currency} rate={item.rate.toFixed(4)} />
    ));

  render() {
    const { rates, currencyFrom, currencyTo } = this.props;

    const filteredRates = () => {
      let ratesFiltered = rates.filter(
        item =>
          (item.currency === 'GBP' ||
            item.currency === 'CAD' ||
            item.currency === 'MXN' ||
            item.currency === 'JPY' ||
            item.currency === 'EUR') &&
          item.currency !== this.props.currencyFrom
      );
      if (ratesFiltered.length === 4) {
        const [usd] = ratesFilter(rates, 'USD');
        ratesFiltered = [usd, ...ratesFiltered];
      }
      if (currencyFrom !== 'ILS' && currencyTo !== 'ILS') {
        const [ils] = ratesFilter(rates, 'ILS');
        ratesFiltered = [ils, ...ratesFiltered].slice(0, -1);
      }
      return ratesFiltered;
    };

    return (
      <CurrentRatesBlockStyled>
        <BlockHeader title="Today's rates" subtitle="1 USD =" />
        <Content>{this.renderEachRate(filteredRates())}</Content>
      </CurrentRatesBlockStyled>
    );
  }
}

const mapStateToProps = ({ getExchangeRates, currencyValues }) => ({
  rates: getExchangeRates.response.mappedRates,
  currencyFrom: currencyValues.currencyFrom,
  currencyTo: currencyValues.currencyTo
});

const CurrentRatesBlockConnect = connect(
  mapStateToProps,
  undefined
)(CurrentRatesBlock);

export { CurrentRatesBlockConnect as CurrentRatesBlock };
