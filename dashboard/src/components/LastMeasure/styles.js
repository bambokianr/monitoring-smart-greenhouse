import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    color: #28262e;
    font-weight: 300;
    font-size: 14px;
  }

  h5 {
    padding: 18px 8px 6px;
    width: 360px !important;
    color: #474A2C;
    font-weight: 600;
    font-size: 16px;
    @media(max-width: 1200px) {
      margin: 0 auto;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 360px !important;
  background-color: #fff;
  padding: 12px 18px;
  border-radius: 12px;

  @media(max-width: 1200px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Info = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-top: 6px;
  }

  p {
    margin-top: 4px;
    color: #59A96A;
    font-size: 22px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Warning = styled.div`
  width: 360px !important;
  margin-top: 12px;
  background-color: #ed2939;
  padding: 12px 18px;
  border-radius: 12px;
  
  p {
    color: #fff;
    font-size: 15px;
  }

  @media(max-width: 1200px) {
    margin: 12px auto 32px;
  }
`;