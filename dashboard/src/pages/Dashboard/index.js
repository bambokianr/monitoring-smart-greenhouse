import React, { useState, useEffect } from 'react';
import { FiEdit, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { filterOptions, filterData } from '../../utils';

import LastMeasure from '../../components/LastMeasure';
import Chart from '../../components/Chart';
import Select from '../../components/Select';

import { Container, Header, HeaderContent, Profile, ActionContent, Overview, Content } from './styles';

const user = { name: 'teste user' };


function Dashboard() {
  const TWO_MINUTES = 2 * 60 * 1000;
  const [dataChart, setDataChart] = useState([]);
  const [lastMeasure, setLastMeasure] = useState({});
  const [selectedFilter, setSelectedFilter] = useState('week');
  const [filteredData, setFilteredData] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    api.get('data').then(res => {
      setDataChart(res.data);
      setLastMeasure(res.data.slice(-1).pop());
    });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     api.get('data').then(res => {
  //       setDataChart(res.data);
  //       setLastMeasure(res.data.slice(-1).pop());
  //     });
  //   }, TWO_MINUTES);
  //   return () => clearInterval(interval);
  // }, [TWO_MINUTES]);


  useEffect(() => {
    const filteredData = filterData(selectedFilter, dataChart);
    setFilteredData(filteredData);
  }, [dataChart, selectedFilter]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </Profile>
          <ActionContent>
            {/* <button tyle="button" onClick={() => {}}>
              <FiEdit />
            </button> */}
            <button tyle="button" onClick={() => goBack()}>
              <FiPower />
            </button>
          </ActionContent>
        </HeaderContent>
      </Header>
      <Overview>
        <h1>Dashboard</h1>
        <Content>
          <LastMeasure data={lastMeasure} />
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p style={{ marginBottom: 18 }}>Medições do solo - nó sensor</p>
              {filteredData.length !== 0 && <Select 
                dataOptions={filterOptions} 
                selectedOptionValue={selectedFilter}
                onChangeOption={setSelectedFilter}
              />}
            </div>
            <Chart data={filteredData} dataKey="humidity" legendName="umidade" color="#59A96A" />
            <Chart data={filteredData} dataKey="temperature" legendName="temperatura" color="#B4E7CE" />
          </div>
        </Content>
      </Overview>
    </Container>
  );
}

export default Dashboard;