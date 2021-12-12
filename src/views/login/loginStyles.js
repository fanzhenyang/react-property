import styled from 'styled-components';
import loginFormImg from '../../assets/img/login/login_form.png';
import { Button, Form, Input } from 'antd';
export const LoginWrapper = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	background: url('/img/login_bg.jpeg') no-repeat center center;
	background-size: 100% 100%;
	height: 100vh;
	width: 100vw;
`;

export const LoginH1Title = styled.h1`
	margin: 0;
	padding-top: 20vh;
	text-align: center;
	font-size: 2.1vw;
	font-weight: bold;
	letter-spacing: 0.5rem;
	background: linear-gradient(0deg, #26abdf, #fbfdfe 22%);
	color: transparent;
	-webkit-background-clip: text;
`;

export const LoginForm = styled(Form)`
	background: url(${loginFormImg}) no-repeat center center;
	background-size: 100% 100%;
	position: relative;
	width: 35vw;
	height: 40vh;
	box-sizing: border-box;
	padding: 2vw 4vw;
`;

export const LoginFormH2 = styled.h2`
	font-size: 1.3vw;
	color: #eee;
	margin: 2vh auto 2.4vh auto;
	text-align: center;
	font-weight: bold;
	letter-spacing: 1rem;
`;

export const LoginInput = styled(Input)`
	background-color: transparent;
	color: #fff;
	border: 0.01rem solid rgba(255, 255, 255, 0.1);
	.ant-input {
		background-color: transparent;
		height: 4vh;
		color: #fff;
	}
	.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless) {
		background-color: transparent;
	}
`;

export const LoginInputPassWord = styled(Input.Password)`
	background-color: transparent;
	color: #fff;
	border: 0.01rem solid rgba(255, 255, 255, 0.1);
	.ant-input {
		background-color: transparent;
		height: 4vh;
		color: #fff;
	}
`;

export const LoginFormButton = styled(Button)`
	height: 4vh;
	font-size: 1vw;
`;
