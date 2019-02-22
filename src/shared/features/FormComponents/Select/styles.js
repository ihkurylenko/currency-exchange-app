import styled from 'styled-components';

export const SelectStyled = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;

  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    bottom: 27px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
  }
`;

export const SelectionCurrent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid lightgray;
  color: black;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

export const SelectionCurrentValue = styled.div`
  padding: ${({ isTyping }) => (isTyping ? `4px 21px 6px 15px` : `20px`)};
  width: 100%;
  box-sizing: border-box;
`;

export const SelectionList = styled.div`
  position: absolute;
  z-index: 20;
  top: 60px;
  left: 0;
  min-width: 100%;
  overflow: visible;
  overflow-y: scroll;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  background: white;
  box-shadow: 0 1px 14px 0 rgba(18, 40, 56, 0.18);
  max-height: 250px;
`;

export const SelectionListItem = styled.span`
  display: flex;
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;

  &:hover {
    color: white;
    background-color: rgb(30, 62, 104);
  }
`;

export const InputStyles = styled.input`
  position: relative;
  width: 100%;
  height: 26px;
  border: none;
  box-sizing: border-box;
  outline: none;
  line-height: 24px;
  font-size: 14px;
`;

