import styled from 'styled-components';
import { Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { commonRoters, RouterGuardsAuth } from '@/routers/index';
import Layout from '@/layout/layout';

function App() {

  return (
    <AppView>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          {/* 不是layout组件里面的 */}
          <Routes>
            {
              commonRoters.map(el => {
                return <Route path={el.path} element={<el.element />} key={el.path} />
              })
            }
          </Routes>
          {/* layout组件里面的 */}
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