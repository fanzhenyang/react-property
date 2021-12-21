import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import session from './auth';
import { } from 'react-router-dom'
class Http {
  private readonly baseUrl: string | undefined

  constructor() {
    // this.baseUrl = config.hostUrl
    this.baseUrl = process.env.REACT_APP_API_URL
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: 50000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return config
  }

  // 请求拦截
  interceptors(instance: AxiosInstance, url: string | number | undefined) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading..
      // 请求头携带token
      // const token = session.getItem('ADMIN_TOKEN')
      // console.log('%c 🍹 token: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', token);
      // if (!token || token === 'undefined') {

      // }
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + session.getItem('ADMIN_TOKEN')
      }
      return config
    }, (error: unknown) => {
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use((res: AxiosResponse) => {
      res.config.cbs && res.config.cbs()
      // 返回数据
      const { data, config, status } = res
      if (data.data?.current && data.data?.size && data.data?.total) {
        const { data: { current, size, total } } = data
        data.data.paginationPage = Object.assign({}, { page: current, size: size, total: total })
      }
      if (config.url && config.url.includes('auth/oauth/token')) {
        if (data.status === 412) {
          message.error(data.message)
          window.location.href = '/login'
          return false
        } else {
          message.success('登录成功')
        }
      }
      if (data.status === 401) {
        message.error(data.message)
        window.location.href = '/login'
        return false
      }

      if (res.config.msg && document.getElementsByClassName('ant-message').length === 0) {
        if (res.config.type === 'add') {
          Http.msgFunc(data, '新增')
        } else if (res.config.type === 'edit') {
          Http.msgFunc(data, '编辑')
        } else if (res.config.type === 'reset') {
          Http.msgFunc(data, '重置密码')
        } else if (res.config.type === 'delete') {
          Http.msgFunc(data, '删除')
        } else {
          Http.msgFunc(data)
        }
      }

      return Object.assign({}, data, status)
    }, (error: any) => {
      error.config.cbs && error.config.cbs()
      return Promise.reject(error)
    })
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  static msgFunc(data: any, str = '') {
    if (data.status === 200) {
      message.success(str + data.message)
    } else if (data.status === 412) {
      message.error(data.message)
    } else {
      message.error(str + data.message)
    }
  }
}

const http = new Http()
export default http