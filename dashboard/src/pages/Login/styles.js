import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  h1 {
    margin-bottom: 24px;
    font-size: 22px;
  }
`;

export const Input = styled.input`
  width: 290px;
  height: 36px;
  padding: 12px;
  border-radius: 8px;
  border: none;
`;

export const Button = styled.button`
  background: #9BDEAC;
  height: 48px;
  border-radius: 10px;
  border: 0;
  color: #474A2C;
  width: 140px;
  font-weight: 600;
  margin-top: 16px;
`;