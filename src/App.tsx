import styled from 'styled-components';
import Login from '@/views/login/login';
import Layout from '@/layout/layout';
import session from '@/utils/auth';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import RotersCom from '@/routers/router'

function App() {
  const [token, setToken] = useState('')
  useEffect(() => {
    setToken(session.getItem('ADMIN_TOKEN'))
  }, [token])

  return (
    <AppView>
      {/* <Router>
        <Routes>
          <>
            {token ? <Layout /> : <Login />}
          </>
        </Routes>
      </Router> */}
      {token ? <Layout /> : <Login />}
    </AppView>
  )
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`