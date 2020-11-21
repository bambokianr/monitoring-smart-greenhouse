import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #474A2C;

  @media(max-width: 1200px) {
    padding: 32px 48px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const ActionContent = styled.div`
  margin-left: auto;

  button:first-of-type {
    svg { color: #9BDEAC; }
  }

  button {
    padding-left: 32px;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;

  span {
    color: #F4EDE8;
  }

  strong {
    color: #9BDEAC;
  }
`;

export const Overview = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;

  @media(max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #59A96A;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  div:first-of-type { width: 50%; }
  /* div { width: 500px; } */
`;
