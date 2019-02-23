import React from 'react';
import { BlockHeaderStyled, Title } from './styles';

const BlockHeader = ({ title, subtitle }) => {
  return (
    <BlockHeaderStyled>
      <Title>{title}</Title>
      <Title>{subtitle}</Title>
    </BlockHeaderStyled>
  );
};

export { BlockHeader };
