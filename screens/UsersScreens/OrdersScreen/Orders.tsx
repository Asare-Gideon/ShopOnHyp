import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../../components/Header'
import { accouontProp } from '../../../Types'
import { styles } from './styles'

const Order = ({navigation}: accouontProp) => {
    return (
        <View style={styles.main}>
            <Header title='Orders' navigation={navigation} />

            <ScrollView style={styles.contentCont}>
                
            </ScrollView>
        </View>
    )
}

export default Order
