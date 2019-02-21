import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objToArr, imgDefiner } from '../../../../shared/core/utils';

import { Input } from  '../../../../shared/features/FormComponents/Input/Input';
import { Select } from  '../../../../shared/features/FormComponents/Select/Select';

import { CurrencyBlockStyled, BlockHeader, TopicContainer, Topic, Container, FromBlock, ToBlock, Label } from './styles';

class CurrencyBlock extends Component {
  state = {
    activeTopic: 'currencyConverter',
    amountFrom: '1000',
    amountTo: '0',
    currencyFrom: 'USD',
    currencyTo: 'ILS'
  }

  onChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { activeTopic, amountFrom, amountTo, currencyFrom, currencyTo } = this.state;

    const mappedRates = objToArr(this.props.rates);

    const ratesArr = mappedRates.map(item => {
      return {
        value: item.country,
        label: <Label><img src={imgDefiner(item.country)} alt="flag" width="30px" height="20px"></img> {item.country}</Label>
      };
    })

    return (
      <CurrencyBlockStyled>
        <BlockHeader>
          <TopicContainer active={activeTopic === 'currencyConverter'} onClick={() => this.setState({ activeTopic: 'currencyConverter' })}>
            <Topic>Currency converter</Topic>
          </TopicContainer>
          <TopicContainer active={activeTopic === 'historicalRates'} onClick={() => this.setState({ activeTopic: 'historicalRates' })}>
            <Topic>Historical rates</Topic>
          </TopicContainer>
        </BlockHeader>
        <Container>
          <FromBlock>
            <Input      
              name="amountFrom"
              value={amountFrom}
              label="From"
              onChange={this.onChange}
            />
            <Select 
              name="currencyFrom"
              value={currencyFrom}
              options={ratesArr}
              onChange={this.onChange}
            />
          </FromBlock>
          <ToBlock>
            <Input      
              name="amountTo"
              value={amountTo}
              label="To"
              onChange={this.onChange}
            />
            <Select 
              name="currencyTo"
              value={currencyTo}
              options={ratesArr}
              onChange={this.onChange}
            />
          </ToBlock>
        </Container>
      </CurrencyBlockStyled>
    )
  }
}

const mapStateToProps = store => ({
  status: store.getExchangeRatesReducer,
  rates: store.getExchangeRatesReducer.response.rates
});

const CurrencyBlockConnect = connect(
  mapStateToProps,
  undefined
)(CurrencyBlock);

export { CurrencyBlockConnect as CurrencyBlock };
