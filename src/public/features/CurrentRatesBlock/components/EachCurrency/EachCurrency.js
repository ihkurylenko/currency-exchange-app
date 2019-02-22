import React from 'react';

import { EachCurrencyStyled, Img, Item, Rate } from './styles';

const EachCurrency = ({ img, item, rate }) => {
  return (
    <EachCurrencyStyled>
      <Img>
        <img src={img} alt={img} width="30px" height="20px"/>
      </Img>
      <Item>{item}</Item>
      <Rate>{rate}</Rate>
    </EachCurrencyStyled>);
  
};

export { EachCurrency };
