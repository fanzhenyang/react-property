import styled from 'styled-components';
import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { commonRoters, RouterGuardsAuth } from '@/routers/index';
import Layout from '@/layout/layout';

function App() {

  return (
    <AppView>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <RouterGuardsAuth />
        </Router>
      </Suspense>
    </AppView>)
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`