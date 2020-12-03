import React from 'react';

import { FaTemperatureLow } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

import { formatDate } from '../../utils';
import { Container, Content, Info, Warning } from './styles';

function LastMeasure({ data }) {
  return (
    <Container>
      <p>Última medição realizada</p>
      <div>
        {Object.keys(data).length === 0 && <h4>Sem dados para .</h4>}
        {Object.keys(data).length !== 0 && 
          <>
            <h5>{formatDate(data.date)}</h5>
            <Content>
              <Info>
                <FaTemperatureLow size={20} />
                <p>{data.temperature}<span>°C</span></p>
              </Info>
              <Info>
                <GiWaterDrop size={20} />
                <p>{data.humidity}<span>%</span></p>
              </Info>
            </Content>
            {data.humidity <= 20 && 
              <Warning>
                <p>Umidade baixa. Considere irrigar sua planta!</p>
              </Warning>
            }       
          </>
        }
      </div>
    </Container>
  );
}
export default LastMeasure;