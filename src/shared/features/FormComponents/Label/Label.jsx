import * as React from 'react';
import { LabelStyled } from './styles';

const Label = ({ label, name }) => {
  return <LabelStyled htmlFor={name}>{label}</LabelStyled>;
};

export { Label };
