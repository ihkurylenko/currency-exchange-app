import React from 'react';
import { Loader } from 'shared/layouts/Loader/Loader';

import { EachCurrencyStyled, Img, Item, Rate } from './styles';

const EachCurrency = ({ img, item, rate, loading }) => {
  return (
    <EachCurrencyStyled>
      <Img>
        <img src={img} alt={img} width="30px" height="20px" />
      </Img>
      <Item>{item}</Item>
      <Rate>{loading === 'REQUEST' ? <Loader /> : rate}</Rate>
    </EachCurrencyStyled>
  );
};

export { EachCurrency };
