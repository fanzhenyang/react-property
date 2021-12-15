import { LoginWrapper, LoginH1Title, LoginForm, LoginInput, LoginInputPassWord, LoginFormH2, LoginFormButton } from './loginStyles'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import CryptoJS from 'crypto-js';
import { login } from '../../api/user/user';
import { useState } from 'react';
import { userAction } from '@/redux/reducers/userReducer';
import session from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

  return <LoginWrapper>
    <LoginH1Title>铁路投资建设智慧管控平台</LoginH1Title>
    <LoginForm form={form} autoComplete="off" onFinish={handleSubmit}>
      <LoginFormH2>用户登录</LoginFormH2>
      <LoginForm.Item
        name={['form', 'username']}
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <LoginInput placeholder="请输入用户名" prefix={<UserOutlined />} />
      </LoginForm.Item>

      <LoginForm.Item
        name={['form', 'password']}
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <LoginInputPassWord placeholder="请输入密码" prefix={<UnlockOutlined />} />
      </LoginForm.Item>
      <LoginForm.Item>
        <LoginFormButton loading={loading} type="primary" htmlType="submit" block>
          登录
        </LoginFormButton>
      </LoginForm.Item>
    </LoginForm>
  </LoginWrapper>
}

export default Login;
