import React, { useEffect } from 'react';
import api from './services/api';

function App() {
  const ONE_MINUTE = 1/2 * 60 * 1000;

  // useEffect(() => {
  //   api.get('data').then(res => console.log('RES', res.data));
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      api.get('data').then(res => console.log('RES', res.data));
    }, ONE_MINUTE);
    return () => clearInterval(interval);
  }, [ONE_MINUTE]);

  return (
    <div>Monitoring Smart Greenhouse</div>
  );
}

export default App;
