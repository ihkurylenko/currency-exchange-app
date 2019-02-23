import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { imgDefiner } from 'shared/core/utils';

import { set as setExchangeData } from '../actions/setCurrentExchange';

import { Input } from 'shared/features/FormComponents/Input/Input';
import { Select } from 'shared/features/FormComponents/Select/Select';

import {
  CurrencyBlockStyled,
  BlockHeader,
  TopicContainer,
  Topic,
  Container,
  FromBlock,
  ToBlock,
  Label,
  InputWrapper,
  SelectWrapper,
  YourRateBlock,
  YourRateTitle,
  YourRateContent,
  YourRateFooter
} from './styles';

class CurrencyBlock extends Component {
  state = {
    activeTopic: 'currencyConverter',
    amountFrom: (1000).toFixed(2),
    amountTo: (this.props.rates.filter(item => item.country === 'ILS')[0].rate * 1000).toFixed(2),
    currencyFrom: this.props.currentExchange,
    currencyTo: 'ILS'
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    // const { setExchangeData } = this.props;

    this.setState({ [name]: value });
  };

  onAmountChange = e => {
    const { name, value } = e.currentTarget;
    const { rates } = this.props;

    const amountFrom = name === 'amountFrom';
    const amountTo = name === 'amountTo';
    const [{ rate: currency }] = rates.filter(item => item.country === this.state.currencyTo);

    this.setState({
      amountFrom: amountTo ? (value / currency).toFixed(2) : value,
      amountTo: amountFrom ? (value * currency).toFixed(2) : value
    });
  };

  render() {
    const { activeTopic, amountFrom, amountTo, currencyFrom, currencyTo } = this.state;
    const { rates } = this.props;

    const ratesOptions = rates.map(item => {
      return {
        value: item.country,
        label: (
          <Label>
            <img src={imgDefiner(item.country)} alt="flag" width="30px" height="20px" /> {item.country}
          </Label>
        )
      };
    });
    const [{ rate: currency }] = rates.filter(item => item.country === this.state.currencyTo);
    console.log();

    return (
      <CurrencyBlockStyled>
        <BlockHeader>
          <TopicContainer
            active={activeTopic === 'currencyConverter'}
            onClick={() => this.setState({ activeTopic: 'currencyConverter' })}
          >
            <Topic>Currency converter</Topic>
          </TopicContainer>
          <TopicContainer
            active={activeTopic === 'historicalRates'}
            onClick={() => this.setState({ activeTopic: 'historicalRates' })}
          >
            <Topic>Historical rates</Topic>
          </TopicContainer>
        </BlockHeader>
        <Container>
          <FromBlock>
            <InputWrapper>
              <Input name="amountFrom" value={amountFrom} label="From" onChange={this.onAmountChange} />
            </InputWrapper>
            <SelectWrapper>
              <Select name="currencyFrom" value={currencyFrom} options={ratesOptions} onChange={this.onChange} />
            </SelectWrapper>
          </FromBlock>
          <ToBlock>
            <InputWrapper>
              <Input name="amountTo" value={amountTo} label="To" onChange={this.onAmountChange} />
            </InputWrapper>
            <SelectWrapper>
              <Select name="currencyTo" value={currencyTo} options={ratesOptions} onChange={this.onChange} />
            </SelectWrapper>
          </ToBlock>
          <YourRateBlock>
            <YourRateTitle>Your rate:</YourRateTitle>
            <YourRateContent>
              {currencyFrom} 1 = {currencyTo} {currency.toFixed(4)}
            </YourRateContent>
            <YourRateFooter>Last updated {this.props.updateTime}</YourRateFooter>
          </YourRateBlock>
        </Container>
      </CurrencyBlockStyled>
    );
  }
}

const mapStateToProps = ({ getExchangeRatesReducer, setCurrentExchangeReducer }) => ({
  status: getExchangeRatesReducer,
  rates: getExchangeRatesReducer.response.mappedRates,
  ilsRate: getExchangeRatesReducer.response.rates.ILS,
  updateTime: getExchangeRatesReducer.response.date,
  currentExchange: setCurrentExchangeReducer.currentExchange
});

const mapDispatchToProps = dispatch => bindActionCreators({ setExchangeData }, dispatch);

const CurrencyBlockConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyBlock);

export { CurrencyBlockConnect as CurrencyBlock };
