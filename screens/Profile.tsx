import React from 'react'
import {
    Text,
    Alert,
    TouchableOpacity
} from 'react-native'
import accountService from '../services/accountService'
import { useDispatch } from 'react-redux'
import { setSignout } from '../balanceSlice'
import LoginScreen from './LoginScreen'
import Header from '../components/HeaderItem'
import VerticalNav from '../components/VerticalNav'

export default function ProfileScreen({ navigation }: any) {
    const dispath = useDispatch()
    const handleLoggout = () => {
        accountService.logout()
            .then((res: any) => {
                Alert.alert(res.data.message)
                if (res.data.error == 0) {
                    dispath(setSignout())
                    return (
                        <LoginScreen />
                    )
                }
            })
    }
    return (
        <>
            <Header title={'Thông tin'} />
            <VerticalNav />
            <TouchableOpacity

                onPress={handleLoggout}
            >
                <Text style={{ color: 'black' }}>
                    Loggout
                </Text>
            </TouchableOpacity>
        </>
    )
}