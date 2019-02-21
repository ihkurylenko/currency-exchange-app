import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objToArr, imgDefiner } from '../../../../shared/core/utils';

import { BlockHeader } from '../../../../shared/layouts/BlockHeader/BlockHeader';
import { EachCurrency } from './EachCurrency/EachCurrency';

import { CurrentRatesBlockStyled, Content } from './styles';

class CurrentRatesBlock extends Component {
  renderEachRate = (arr) => 
    arr.map((item, index) => (
      <EachCurrency img={imgDefiner(item.country)} key={index} item={item.country} rate={item.rate}/>
    ));

  render() {
    const mappedRates = objToArr(this.props.rates);

    const filteredRates = mappedRates.filter(
      item => item.country === 'GBP' || 
      item.country === 'CAD' || 
      item.country === 'MXN' || 
      item.country === 'JPY'
    );

    return (
      <CurrentRatesBlockStyled>
        <BlockHeader title="Today's rates" subtitle="1 USD =" />
        <Content>
          {this.renderEachRate(filteredRates)}
        </Content>
      </CurrentRatesBlockStyled>);
  }
}

const mapStateToProps = store => ({
  rates: store.getExchangeRatesReducer.response.rates
});

const CurrentRatesBlockConnect = connect(
  mapStateToProps,
  undefined
)(CurrentRatesBlock);

export { CurrentRatesBlockConnect as CurrentRatesBlock };
