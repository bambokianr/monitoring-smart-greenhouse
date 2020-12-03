import React, { useRef } from 'react';

import { FiArrowDown } from 'react-icons/fi';

import { Container, SelectContainer } from './styles';

function ChartSelect({ dataOptions, onChangeOption = () => {}, selectedOptionValue }) {
  const selectRef = useRef(null);

  return (
    <Container>
      <FiArrowDown />
      <SelectContainer 
        value={selectedOptionValue}
        ref={selectRef}
        onChange={() => onChangeOption(selectRef.current?.value)}
      >
        {dataOptions.map(data => 
          <option key={data.key} value={data.key}>{data.tag}</option> 
        )} 
      </SelectContainer>
    </Container>
  );
}
export default ChartSelect;