import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { formatDate } from "../../utils";

import { Container, CustomTooltipContainer } from "./styles";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <CustomTooltipContainer color={payload[0]?.fill}>
        <p>{formatDate(label)}</p>
        {payload[0]?.payload && (
          <p>{`Temperatura: ${payload[0]?.payload.temperature}ºC`}</p>
        )}
        {payload[0]?.payload && (
          <p>{`Umidade: ${Math.floor(payload[0]?.payload.humidity * 100)}%`}</p>
        )}
      </CustomTooltipContainer>
    );
  }
  return null;
};

function Chart({ data = [], dataKey, legendName, color }) {
  return (
    <Container>
      {data.length === 0 && (
        <h4>{`Não existem dados suficientes para gerar o gráfico de ${legendName}.`}</h4>
      )}
      {data.length !== 0 && (
        <>
          <LineChart width={640} height={300} data={data}>
            <CartesianGrid />
            <XAxis dataKey="date" />
            <YAxis domain={legendName === "temperatura" ? [5, 55] : [0, 1]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend align="right" wrapperStyle={{ bottom: 10 }} />
            <Line
              name={legendName}
              dataKey={dataKey}
              stroke={color}
              fill={color}
            />
          </LineChart>
        </>
      )}
    </Container>
  );
}

export default Chart;
