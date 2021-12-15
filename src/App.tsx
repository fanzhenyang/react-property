import styled from 'styled-components';
import Layout from '@/layout/layout';
import RouterGuardsAuth from '@/routers/router';
import { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'

function App() {

  return (
    <AppView>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <RouterGuardsAuth />
        </Router>
      </Suspense>
    </AppView>
  )
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`