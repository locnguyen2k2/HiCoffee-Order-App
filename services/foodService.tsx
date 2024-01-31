import axios from 'axios'
import { ipv4 } from '../constants/IPv4'
const getListFood = async (category: any) => {
    try {
        if (category != null && category != undefined) {
            const formData = new FormData()
            formData.append('type_id', category)
            return await axios({
                url: 'http://' + ipv4() + '/CoffeeOrder/api/foodcontroller/getlistfood',
                method: 'post',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
        } else {
            return await axios.post('http://' + ipv4() + '/CoffeeOrder/api/foodcontroller/getlistfood')
        }
    } catch (error) {
        console.log(error)
    }
}

export default {
    getListFood,
}
