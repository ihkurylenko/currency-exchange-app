import styled from 'styled-components';
import { ButtonStyled } from 'shared/features/FormComponents/Button/styles';

export const CurrencyBlockStyled = styled.div`
  margin-right: 50px;
  height: 500px;
  width: 700px;
  position: relative;
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
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const HistoryBlock = styled.div`
  display: flex;
  justify-content: center;

  ${ButtonStyled} {
    width: 150px;
    margin-right: 20px;

    &:last-child {
      margin: 0;
    }
  }
`;

export const FromBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ToBlock = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const InputWrapper = styled.div`
  width: 200px;
  display: flex;
`;

export const SelectWrapper = styled.div`
  width: 350px;
  padding-left: 15px;
  display: flex;
`;

export const Label = styled.div`
  display: flex;

  img {
    margin-right: 10px;
  }
`;

export const YourRateBlock = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
`;

export const YourRateTitle = styled.div`
  display: flex;
  font-size: 18px;
`;

export const YourRateContent = styled.div`
  display: flex;
  font-size: 22px;
`;

export const YourRateFooter = styled.div`
  display: flex;
  font-size: 16px;
`;
