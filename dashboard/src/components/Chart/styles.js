import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    color: #28262e;
    font-weight: 300;
    font-size: 14px;
  }
`;

export const CustomTooltipContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 12px 20px;
  width: 210px !important;
  border-radius: 6px;

  p {
    font-size: 14px;
    color: #fff;
  }

  p:first-child {
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.color};
  }
`;