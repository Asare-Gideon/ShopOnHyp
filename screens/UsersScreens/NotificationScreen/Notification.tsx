import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import Header from "../../../components/Header"
import { homeStackProp } from '../../../Types'
import { useAppDispatch } from '../../../app/reduxHooks/hooks'
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice'

const Notification = ({navigation}: homeStackProp) => {
    const dispatch = useAppDispatch()

useEffect(() => {
    navigation.addListener("focus",()=> {
      dispatch(setBottomNav(true))
    })
  },[])
    return (
        <View style={styles.main}>
            <Header title="Notification" navigation={navigation} />

            <View style={styles.mainContent}></View>
        </View>
    )
}

export default Notification
