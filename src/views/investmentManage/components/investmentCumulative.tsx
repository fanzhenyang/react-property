import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { homeCompairPercent } from '@/api/invest/invest'
import { HomeCompairPercent } from '@/interface/investmentManage';
import EChart from '@/components/Echarts/echarts';
const InvestmentCumulative = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [option, setOption] = useState({})
  const [echartsList, setEchartsList] = useState<HomeCompairPercent[]>([])
  useEffect(() => {
    (async function () {
      setLoading(true)
      const { data } = await homeCompairPercent(null, () => {
        setLoading(false)
      })
      setEchartsList(data)
      chartConfig(data)
    })()
  }, [])

  const chartConfig = (data: HomeCompairPercent[]) => {
    const target = {
      color: ['#0D6DE9', '#2BC15D', '#F9CC1F', '#EF4863', '#8544DE', '#12C1C1'],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params: any) {
          return `${params.name}：${params.value.toFixed(2)}亿`
        }
      },
      legend: {
        show: true,
        top: 'middle',
        right: 'right',
        orient: 'vertical',
        textStyle: {
          color: '#ffffff'
        },
        formatter: function (name: string) {
          let target = ''
          data.forEach(item => {
            if (name === item.projectTypeName) {
              target = `${name}：${item.amount.toFixed(2)}(${(Math.round(item.amount / item.plan * 10000) / 100)}%)`
            }
          })
  
          return target
        }
      },
      series: [
        {
          center: ['35%', '50%'],
          radius: ['70%', '60%'],
          type: 'pie',
          clockWise: true, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: 'outside'
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.2
              },
              borderColor: '#0D6DE9',
              shadowColor: 'rgba(0, 0, 0, 0)' // 边框阴影
            }
          },
          data: data.map(item => ({ value: item.amount, name: item.projectTypeName }))
        }
      ]
    }
    setOption(target)
  }
  const planNum = useMemo(() => echartsList[0]?.plan.toFixed(2), [echartsList])
  const actualNum = useMemo(() => echartsList[0]?.amount.toFixed(2), [echartsList])
  const proportionNum = useMemo(() => Math.round(echartsList[0]?.amount / echartsList[0]?.plan * 10000) / 100 + '%', [echartsList])

  return <>
    <CumulativeWrapper>
      <div>
        <CumulativeNum>{planNum}</CumulativeNum>
        <CumulativePlan>计划投资总额</CumulativePlan>
      </div>
      <div>
        <CumulativeNum>{actualNum}</CumulativeNum>
        <CumulativePlan>实际投资总额</CumulativePlan>
      </div>
      <div>
        <CumulativeNum>{proportionNum}</CumulativeNum>
        <CumulativePlan>本年累计投资金额占比</CumulativePlan>
      </div>
    </CumulativeWrapper>
    <EChart id="Echarts1" options={option} width={'100%'} height={'calc(44vh - 9vh)'} />
  </>
}

const CumulativeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-top: .6rem;
`
const CumulativeNum = styled.p`
  text-align: center;
  font-size: 2.8rem;
  text-shadow: 0 0 .8rem #195cdc, 0 0 1.5rem #195cdc, 0 0 2.5rem #195cdc, 0 0 4rem #195cdc, 0 0 7rem #195cdc;

`
const CumulativePlan = styled.p`
  font-size: 1.2rem;
  margin-top: .2rem;
  text-align: center;

`
export default InvestmentCumulative