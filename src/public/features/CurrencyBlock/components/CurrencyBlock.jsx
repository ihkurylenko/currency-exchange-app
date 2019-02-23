import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { imgDefiner, round } from 'shared/core/utils';

import { req as setCurrencyFrom } from '../actions/setCurrencyFrom';
import { set as setCurrencyTo } from '../actions/setCurrencyTo';

import { Input } from 'shared/features/FormComponents/Input/Input';
import { Select } from 'shared/features/FormComponents/Select/Select';
import { Loader } from 'shared/layouts/Loader/Loader';

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
    amountFrom: '1000',
    currencyFrom: this.props.currencyFrom,
    amountTo: round(this.props.targetRates[this.props.currencyTo] * 1000),
    currencyTo: this.props.currencyTo
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.targetLoading !== this.props.targetLoading || prevState.currencyTo !== this.state.currencyTo) {
      const { targetRates } = this.props;
      const { amountFrom, currencyTo } = this.state;

      this.setState({
        amountTo: round(amountFrom * targetRates[currencyTo])
      });
    }
  }

  onCurrencyChange = e => {
    const { name, value } = e.currentTarget;
    const { setCurrencyFrom, setCurrencyTo, targetRates } = this.props;
    const { currencyTo } = this.state;

    const currencyFromName = name === 'currencyFrom';
    const currencyToName = name === 'currencyTo';
    currencyFromName && setCurrencyFrom(value);
    currencyToName && setCurrencyTo(value);

    this.setState({
      [name]: value,
      amountTo: round(this.state.amountFrom * targetRates[currencyTo])
    });
  };

  onAmountChange = e => {
    const { name, value } = e.currentTarget;
    const { currencyTo } = this.state;
    const { rates, targetRates } = this.props;

    const amountFrom = name === 'amountFrom';
    const amountTo = name === 'amountTo';

    const targetAmount = targetRates ? targetRates[currencyTo] : rates[this.props.currencyTo];

    this.setState({
      amountFrom: amountTo ? round(value / targetAmount) : value,
      amountTo: amountFrom ? round(value * targetAmount) : value
    });
  };

  render() {
    const { activeTopic, amountFrom, amountTo, currencyFrom, currencyTo } = this.state;
    const { rates, mappedRates, targetRates, targetLoading } = this.props;

    const targetAmount = targetRates ? targetRates[currencyTo] : rates[this.props.currencyTo];

    const ratesOptions = mappedRates.map(item => {
      return {
        value: item.currency,
        label: (
          <Label>
            <img src={imgDefiner(item.currency)} alt="flag" width="30px" height="20px" /> {item.currency}
          </Label>
        )
      };
    });

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
              <Select
                name="currencyFrom"
                value={currencyFrom}
                options={ratesOptions}
                onChange={this.onCurrencyChange}
              />
            </SelectWrapper>
          </FromBlock>
          <ToBlock>
            <InputWrapper>
              <Input
                name="amountTo"
                value={amountTo}
                label={targetLoading === 'REQUEST' ? 'LOADING...' : 'To'}
                onChange={this.onAmountChange}
              />
            </InputWrapper>
            <SelectWrapper>
              <Select name="currencyTo" value={currencyTo} options={ratesOptions} onChange={this.onCurrencyChange} />
            </SelectWrapper>
          </ToBlock>
          <YourRateBlock>
            <YourRateTitle>Your rate:</YourRateTitle>
            <YourRateContent>
              {currencyFrom} 1 = {targetLoading === 'REQUEST' ? <Loader /> : `${currencyTo} ${targetAmount.toFixed(4)}`}
            </YourRateContent>
            <YourRateFooter>Last updated {this.props.updateTime}</YourRateFooter>
          </YourRateBlock>
        </Container>
      </CurrencyBlockStyled>
    );
  }
}

const mapStateToProps = ({ getExchangeRates, currencyValues }) => ({
  currencyFrom: currencyValues.currencyFrom,
  currencyTo: currencyValues.currencyTo,
  targetRates: currencyValues.response.rates,
  targetLoading: currencyValues.status,
  rates: getExchangeRates.response.rates,
  mappedRates: getExchangeRates.response.mappedRates,
  updateTime: getExchangeRates.response.date
});

const mapDispatchToProps = dispatch => bindActionCreators({ setCurrencyFrom, setCurrencyTo }, dispatch);

const CurrencyBlockConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyBlock);

export { CurrencyBlockConnect as CurrencyBlock };
