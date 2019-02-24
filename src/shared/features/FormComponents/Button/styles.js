import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 12px 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: unset;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  outline: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background-color: rgb(30, 62, 104);
  border-radius: 5px;

  &:hover {
    background-color: rgba(30, 62, 104, 0.8);
  }

  &:disabled {
    pointer-events: none;
  }
`;
