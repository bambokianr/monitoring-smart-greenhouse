import styled from 'styled-components';

export const Container = styled.div`
  width: 196px !important;
  position: relative;
  bottom: 10px;

  svg {
    position: absolute;
    z-index: 10;
    color: #59A96A;
    right: 12px;
    top: 11px;
  }
`;

export const SelectContainer = styled.select`
  cursor: pointer;
  width: 100%;
  background: #F1F2F6;
  border-radius: 10px;
  border: 2px solid #59A96A;
  color: #808080;
  font-size: 14px;
  padding: 8px;
  padding-left: 12px !important;
  -webkit-appearance: none;
`;