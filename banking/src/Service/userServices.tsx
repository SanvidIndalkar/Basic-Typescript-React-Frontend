import httpClient from '../http-common'

type logInfoType = {email : string, password : string}

type registerBodyType = {id : number, name : string, password : string, balance : number, email : string, role : string}

const login = (logInfo : logInfoType) => {
    httpClient.post('/user/login', logInfo)
}

const register = () => {
    httpClient.post('/user/register', registerBody)
}

export default { login, register }