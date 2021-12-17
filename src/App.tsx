import styled from 'styled-components';
import RouterGuardsAuth from '@/routers/router';
import { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Layout from './layout/layout';

function App() {

  return (
    <AppView>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Layout>
            <RouterGuardsAuth />
          </Layout>
        </Router>
      </Suspense>
    </AppView>)
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`