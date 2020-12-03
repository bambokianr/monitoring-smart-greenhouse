import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { validToken } from '../../utils';

import { Container, Input, Button } from './styles';

function Login() {
  const [token, setToken] = useState('');
  const { push } = useHistory();

  const handleDashboardAccess = useCallback(() => {
    if(token === validToken) {
      push('/dashboard');
    }
  }, [token, push]);

  return(
    <Container>
      <h1>Smart Monitoring Greenhouse</h1>
      <Input
        onChange={e => setToken(e.target.value)} 
        placeholder="token"
      />
      <Button onClick={handleDashboardAccess}>Acessar</Button>
    </Container>
  )
}
export default Login;