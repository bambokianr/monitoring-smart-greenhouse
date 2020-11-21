import React, { useState, useEffect } from 'react';
import { FiEdit, FiPower } from 'react-icons/fi';

import api from '../../services/api';
import Chart from '../../components/Chart';

import { Container, Header, HeaderContent, Profile, ActionContent, Overview, Content } from './styles';

const user = { name: 'teste user' };
function Dashboard() {
  const ONE_MINUTE = 1 * 60 * 1000;
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    api.get('data').then(res => setDataChart(res.data));
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     api.get('data').then(res => setDataChart(res.data));
  //   }, ONE_MINUTE);
  //   return () => clearInterval(interval);
  // }, [ONE_MINUTE]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </Profile>
          <ActionContent>
            <button tyle="button" onClick={() => {}}>
              <FiEdit />
            </button>
            <button tyle="button" onClick={() => {}}>
              <FiPower />
            </button>
          </ActionContent>
        </HeaderContent>
      </Header>
      <Overview>
        <h1>Dashboard</h1>
        <Content>
          <div>
            <div>última medição realizada</div>
            <div>imagens coletadas</div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p style={{ marginBottom: 18 }}>Medições do solo - nó sensor</p>
              <span style={{ color: "#000" }}>select para alterar dados dos gráficos</span>
            </div>

            <Chart data={dataChart} dataKey="humidity" legendName="umidade" color="#59A96A" />
            <Chart data={dataChart} dataKey="temperature" legendName="temperatura" color="#B4E7CE" />
          </div>
        </Content>
      </Overview>
    </Container>
  );
}

export default Dashboard;