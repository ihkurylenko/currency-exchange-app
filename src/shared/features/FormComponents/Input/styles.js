import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input.attrs({ type: 'number' })`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 30px 16px;
  padding-right: 30px;
  box-sizing: border-box;
  outline: none;
  line-height: 24px;
  font-size: 18px;
  color: rgb(74, 156, 207);
  border: 1px solid lightgray;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchIcon = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
`;
