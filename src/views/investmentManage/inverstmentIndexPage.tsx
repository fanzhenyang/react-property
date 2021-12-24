import { InverstmentCard, ContainerWrapper,  InverstmentMain, InverstmentLeftOrRight } from './inverstmentIndexPageStyle';
import Container from '@/components/Container/container';
import InvestmentProjects from './components/investmentProjects';
import InvestmentCumulative from './components/investmentCumulative';
function Home() {
  return <>
    <Container imgIndex={1}>
      <ContainerWrapper>
      <InverstmentLeftOrRight>
        <InverstmentCard title="省列重大铁路项目投资情况">
          <InvestmentProjects />
        </InverstmentCard>
        {/* <InverstmentCard title="本年累计投资金额占比（亿）">
          <InvestmentCumulative />
        </InverstmentCard> */}
      </InverstmentLeftOrRight>
      {/* <InverstmentMain>
        <InverstmentCard title="铁投集团成立前后资本金出资变化">
          <InvestmentCumulative />
        </InverstmentCard>
      </InverstmentMain> */}
      <InverstmentLeftOrRight></InverstmentLeftOrRight>
      </ContainerWrapper>
    </Container>
  </>
}

export default Home