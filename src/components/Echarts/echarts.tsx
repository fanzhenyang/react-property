import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption
interface IProps {
  id?: string
  options: object
  width: string
  height: string
}
const EchartsComponents = ({ id, width, height, options }: IProps) => {
  const echartsRef = useRef(null)
  let chartInstance = null

  /**
   * 渲染绘制表格
   */
  useEffect(() => {
    renderEcharts()
    return () => {
      window.removeEventListener('resize', () => {
        chartInstance && chartInstance.resize()
      })
      chartInstance && chartInstance.dispose()
      chartInstance = null
    }
  }, [options])


  /**
   * ECharts 渲染，先判断是否已渲染到 DOM 节点
   */
  const renderEcharts = () => {
    const renderedInstance = echarts.getInstanceByDom(echartsRef.current)
    if (!renderedInstance) {
      chartInstance = echarts.init(echartsRef.current)
    } else {
      chartInstance = renderedInstance
    }
    chartInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    chartInstance && chartInstance.resize()
  })
  return <EchartsWrapper id={id} width={width} height={height} ref={echartsRef} />
}
const EchartsWrapper = styled.div`
  height: ${(props: Omit<IProps, 'id', 'options'>) => props.height};
  width: ${(props: Omit<IProps, 'id', 'options'>) => props.width};
`

export default EchartsComponents