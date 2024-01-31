import axios from 'axios'
import { ipv4 } from '../constants/IPv4'
const getInDay = async (statistical_object: any, statistical_type: any, from: any, to: any) => {
    const formData = new FormData()
    let URL = ''
    formData.append('statistical_object', statistical_object);
    formData.append('statistical_type', statistical_type);
    formData.append('from', from);
    if (statistical_type == 'range') {
        formData.append('to', to);
        URL = '/CoffeeOrder/api/statisticController/getInvoiceStatisticsInRange'
    } else {
        URL = '/CoffeeOrder/api/statisticController/getDailyInvoiceStatistic'
    }
    try {
        return await axios({
            data: formData,
            method: 'post',
            headers: { "Content-Type": "multipart/form-data" },
            url: 'http://' + ipv4() + URL,
        })
    } catch (error) { console.log(error) }
}

export default {
    getInDay,
}
