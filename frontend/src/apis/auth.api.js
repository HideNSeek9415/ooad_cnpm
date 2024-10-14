import http from '../utils/http'

export const registerAccount = (body) => http.post('/account/register', body)

export const loginAccount = (body) => http.post('/account/login', body)
