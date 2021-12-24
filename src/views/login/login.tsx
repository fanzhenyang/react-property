import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import CryptoJS from 'crypto-js';
import { login } from '../../api/user/user';
import { useState } from 'react';
import { userAction } from '@/redux/reducers/userReducer';
import session from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import loginModule from './login.module.scss';

// 加密
const encrypt = (value: string): string => {
  // 如果是32位在java后端解密会报错 AES获取Cipher异常：Illegal key size 16位就不会
  // const key = CryptoJS.enc.Utf8.parse('61DC779D88F539478E45C55452AF9DBB')
  const key = CryptoJS.enc.Utf8.parse('61DC779D88F53947')
  const iv = CryptoJS.enc.Utf8.parse('1b76d0c6af4bcb56')
  const encrypted = CryptoJS.AES.encrypt(value, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return encrypted
}

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // 点击提交
  const handleSubmit = async (values: any) => {
    setLoading(true)
    const formData = new FormData()
    const target = Object.assign({}, values.form, { client_id: 'GSTT', client_secret: 'cdtye2019' })
    Object.keys(target).forEach(key => {
      formData.append(key, encrypt(target[key]))
    })
    formData.append('grant_type', 'password')

    const data = await login(formData, () => {
      setLoading(false)
    })
    dispatch(userAction(data))
    session.setItem('ADMIN_TOKEN', data.access_token)
    session.setItem('USER_DATA', data.user_name)
    navigate('/')
  }

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  return <div className={loginModule.loginWrapper}>
    <h1 className={loginModule.loginH1Title}>铁路投资建设智慧管控平台</h1>
    <Form form={form} autoComplete="off" onFinish={handleSubmit} className={loginModule.loginForm}>
      <h2 className={loginModule.loginFormH2}>用户登录</h2>
      <Form.Item
        name={['form', 'username']}
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input placeholder="请输入用户名" prefix={<UserOutlined />} className={loginModule.loginInput} />
      </Form.Item>

      <Form.Item
        name={['form', 'password']}
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password placeholder="请输入密码" prefix={<UnlockOutlined />} className={loginModule.loginInput} />
      </Form.Item>
      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit" block className={loginModule.loginFormButton}>
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default Login;
