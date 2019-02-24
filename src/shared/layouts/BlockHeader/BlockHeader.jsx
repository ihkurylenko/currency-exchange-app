import React from 'react';
import { BlockHeaderStyled, Title } from './styles';

const BlockHeader = ({ title, subtitle }) => (
  <BlockHeaderStyled>
    <Title>{title}</Title>
    <Title>{subtitle}</Title>
  </BlockHeaderStyled>
);

export { BlockHeader };
