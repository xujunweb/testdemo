import Mock from 'mockjs'
import { login, logout } from './login'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/logout/, logout)

export default Mock
