import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { homeTopInvest } from '@/api/invest/invest'
import { HomeTop } from '@/interface/investmentManage'
interface HomeTopChild extends HomeTop {
  bgColor: string
}
const InvestmentProjects = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [projectList, setProjectList] = useState<HomeTopChild[]>([])
  useEffect(() => {
    (async function () {
      setLoading(true)
      const { data } = await homeTopInvest({ limitParam: 8 }, () => {
        setLoading(false)
      })
      const colorList = ['#dc5168', '#f09918', '#00b5ff', '#06fce2', '#0340ff', '#3F9EFE', '#00B5FF', '#0D6DE9']
      const list = data.map((item, index) => {
        return {
          ...item,
          bgColor: colorList[index]
        }
      })
      setProjectList(list)
    })()
  }, [])
  return <UlView>
    {
      projectList.map((item, index) => {
        return <LiItem item={item} index={index} key={item.projectName} />
      })
    }
  </UlView>
}
const UlView = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 0.5vw;
  margin-top: 1rem;
  height: 100%;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
`
// 每个li组件
const LiItem = ({ item, index }: { item: HomeTopChild, index: number }) => {
  return <LiView>
    <LiViewName>
      <div>{item.projectName}</div>
    </LiViewName>
    <LiViewCont>
      <LiViewContIndex bgColor={item.bgColor}>
        {index + 1}
      </LiViewContIndex>
      <LiViewBoxView>
        <LiViewBoxUlView percent={item.percent} bgColor={item.bgColor} />
        <LiViewContaAmount>{item.amount.toFixed(3)}亿</LiViewContaAmount>
      </LiViewBoxView>
      <LiViewContPercent>{item.plan}，{item.percent}</LiViewContPercent>
    </LiViewCont>
  </LiView>
}

const LiView = styled.li`
  width: 100%;
  height: 2vh;
  margin-bottom: .2rem;
  cursor: pointer;
  flex: 0 0 4vw;
`
const LiViewName = styled.div`
  color: #fff;
  margin-bottom: .5rem;
`
const LiViewCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`
interface IViewProps {
  bgColor: string
}
const LiViewContIndex = styled.div`
  background: ${(props: IViewProps) => props.bgColor};
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  font-size: 2rem;
`
const LiViewBoxView = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex: 1;
  margin-left: .5rem;
  background-color: #13265e;
`
interface IUlViewProps extends IViewProps {
  percent: string
}
const LiViewBoxUlView = styled.div`
  width:  100%;
  height: 2.5rem;
  background: ${(props: IUlViewProps) => props.bgColor};
  width:  ${(props: IUlViewProps) => props.percent};
`
const LiViewContaAmount = styled.div`
  z-index: 2;
  right: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const LiViewContPercent = styled.div`
  flex: 0 0 22%;
  text-align: right;
`
export default InvestmentProjects