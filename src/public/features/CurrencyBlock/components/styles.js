import styled from 'styled-components';

export const CurrencyBlockStyled = styled.div`
  margin-right: 50px;
  height: 500px;
  width: 700px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const BlockHeader = styled.div`
  height: 60px;
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background-color: rgb(30, 62, 104);
`;

export const TopicContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? 'rgb(30, 62, 104)' : 'rgb(255, 255, 255)')};
  background-color: ${({ active }) => (active ? 'rgb(255, 255, 255)' : 'rgb(30, 62, 104)')};
  cursor: pointer;
`;

export const Topic = styled.span`
  height: fit-content;
  padding: 0 25px;
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const FromBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ToBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Label = styled.div`
  display: flex;

  img {
    margin-right: 10px;
  }
`;