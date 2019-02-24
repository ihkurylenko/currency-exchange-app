import * as React from 'react';

import { ButtonStyled } from './styles';

const defaultProps = {
  label: '',
  isLoading: false,
  disabled: false,
  onClick: () => null
};

const Button = ({ label, isLoading, disabled, onClick }) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>
      {isLoading ? 'LOADING...' : label}
    </ButtonStyled>
  );
};

Button.defaultProps = defaultProps;

export { Button };
