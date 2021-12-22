import http from '@/utils/http'
import { HomeTop, HomeCompairPercent, HomeCompairInvest, HomeMothItem, HomeYearItem } from '@/interface/investmentManage'

// 重大项目投资top8
interface IProps {
  data: HomeTop[]
}
export function homeTopInvest(params: { limitParam: number }, cbs?: () => void): Promise<IProps> {
  return http.request({
    url: 'invest/TzProject/homeTopInvest',
    method: 'get',
    params,
    cbs
  })
}

// 本年度投资金额占比
interface IPropsPercent {
  data: HomeCompairPercent[]
}
export function homeCompairPercent(params: null, cbs?: () => void): Promise<IPropsPercent> {
  return http.request({
    url: 'invest/TzProject/homeCompairPercent',
    method: 'get',
    params,
    cbs
  })
}