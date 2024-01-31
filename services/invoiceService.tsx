import axios from 'axios'
import { ipv4 } from '../constants/IPv4'
const getDetailInvoice = async (data: any) => {
    let formData = new FormData()
    formData.append('invoiceID', data);
    try {
        return await axios({
            data: formData,
            method: 'post',
            headers: { "Content-Type": "multipart/form-data" },
            url: 'http://' + ipv4() + '/CoffeeOrder/api/invoicecontroller/getinvoicedetail',
        })
    } catch (error) {
        console.log(error)
    }
}

const getListInvoiceByTable = async (table: any) => {
    let formData = new FormData()
    formData.append('tableName', table);
    try {
        return await axios({
            data: formData,
            method: 'post',
            headers: { "Content-Type": "multipart/form-data" },
            url: 'http://' + ipv4() + '/CoffeeOrder/api/invoicecontroller/getlistinvoicebytable',
        })
    } catch (error) {
        console.log(error)
    }
}


export default {
    getDetailInvoice,
    getListInvoiceByTable
}
