import React from 'react';
import styled from 'styled-components';
import Login from './views/login/login'

function App () {
  return (
    <AppView>
      <Login />    
    </AppView>
  )
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`