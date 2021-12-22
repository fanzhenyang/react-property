import styled from 'styled-components';
import Container from '@/components/Container/container';
import Card from '@/components/Card/card';
export const InverstmentCard = styled(Card)`
  height: calc(46vh - 4vh);
  z-index: 99;
`

export const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-direction: row;
`
export const InverstmentLeftOrRight = styled.div`
  width: 26vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  min-height: calc(100vh - 9vh);
`  

export const InverstmentMain = styled.div`
  width: 46vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  min-height: calc(100vh - 9vh);
`