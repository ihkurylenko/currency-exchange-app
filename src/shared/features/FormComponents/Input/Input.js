import * as React from 'react';
import { Label } from '../Label/Label';
import { LabelContainer, InputStyled, InputWrapper } from './styles';

const Input = ({ value, name, placeholder, maxLength, label, onChange }) => {
  return (
    <InputWrapper>
      {!!label && (
        <LabelContainer>
          <Label label={label} name={name}/>
        </LabelContainer>
      )}
      <InputStyled value={value} name={name} placeholder={placeholder} onChange={onChange}/>
    </InputWrapper>
  );
}

export { Input };
