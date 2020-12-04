import React from "react";

import { FaTemperatureLow } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

import { formatDate } from "../../utils";
import { Container, Content, Info, Warning } from "./styles";

function LastMeasure({ data }) {
  return (
    <Container>
      <p>Última medição realizada</p>
      <div>
        {!data && <h4>Sem dados para última medição.</h4>}
        {data && Object.keys(data).length !== 0 && (
          <>
            <h5>{formatDate(data.date)}</h5>
            <Content>
              <Info>
                <FaTemperatureLow size={20} />
                <p>
                  {data.temperature}
                  <span>°C</span>
                </p>
              </Info>
              <Info>
                <GiWaterDrop size={20} />
                <p>
                  {Math.floor(data.humidity * 100)}
                  <span>%</span>
                </p>
              </Info>
            </Content>
            {data.humidity <= 0.2 && (
              <Warning>
                <p>Umidade baixa. Considere irrigar sua planta!</p>
              </Warning>
            )}
          </>
        )}
      </div>
    </Container>
  );
}
export default LastMeasure;
