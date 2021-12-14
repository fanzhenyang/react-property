import styled from 'styled-components';
import Login from '@/views/login/login';
import Layout from '@/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/index'

function App() {
  const { token } = useSelector((state: RootState) => ({ token: state.userReducer.token }))

  return (
    <AppView>
      {/* <Router>
        <Routes>
          <>
            {token ? <Layout /> : <Login />}
          </>
        </Routes>
      </Router> */}
      {true ? <Layout /> : <Login />}
    </AppView>
  )
}

export default App;

const AppView = styled.div`
  box-sizing: border-box;
`