import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imgDefiner } from 'shared/core/utils';

import { BlockHeader } from 'shared/layouts/BlockHeader/BlockHeader';
import { EachCurrency } from './EachCurrency/EachCurrency';

import { CurrentRatesBlockStyled, Content } from './styles';

class CurrentRatesBlock extends Component {
  renderEachRate = arr =>
    arr.map((item, index) => (
      <EachCurrency img={imgDefiner(item.currency)} key={index} item={item.currency} rate={item.rate.toFixed(4)} />
    ));

  render() {
    const { rates } = this.props;

    const filteredRates = rates.filter(
      item =>
        item.currency === 'GBP' ||
        item.currency === 'CAD' ||
        item.currency === 'MXN' ||
        item.currency === 'JPY' ||
        item.currency === 'EUR'
    );

    return (
      <CurrentRatesBlockStyled>
        <BlockHeader title="Today's rates" subtitle="1 USD =" />
        <Content>{this.renderEachRate(filteredRates)}</Content>
      </CurrentRatesBlockStyled>
    );
  }
}

const mapStateToProps = store => ({
  rates: store.getExchangeRates.response.mappedRates
});

const CurrentRatesBlockConnect = connect(
  mapStateToProps,
  undefined
)(CurrentRatesBlock);

export { CurrentRatesBlockConnect as CurrentRatesBlock };
