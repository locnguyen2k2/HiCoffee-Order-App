import axios from 'axios'
import { ipv4 } from '../constants/IPv4'
const getListTable = async () => {
    try {
        return await axios.get('http://' + ipv4() + '/CoffeeOrder/api/getlisttable')
    } catch (error) { console.log(error) }
}

export default {
    getListTable,
}
