import axios from 'axios'
import { ipv4 } from '../constants/IPv4'
const login = async (username: string, password: string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    try {
        return await axios({
            method: 'post',
            url: 'http://' + ipv4() + '/CoffeeOrder/api/accountcontroller/signin',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    } catch (error) {
        console.log(error)
    }
}
const logout = async () => {
    try {
        return await axios({
            method: 'get',
            url: 'http://' + ipv4() + '/CoffeeOrder/api/accountcontroller/signout',
        })
    } catch (error) {
        console.log(error)
    }
}
const checkSigned = async () => {
    try {
        return await axios({
            url: 'http://' + ipv4() + '/CoffeeOrder/api/accountcontroller/checkSigned',
            method: 'get',
        })
    } catch (error) {
        console.log(error)
    }
}
export default {
    login,
    logout,
    checkSigned
}
