import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../../components/Header'
import SearchHeader from '../../../components/SearchHeader'
import { homeStackProp } from '../../../Types'
import { styles } from './styles'

const Order = ({navigation}:homeStackProp) => {
    return (
        <View style={styles.main}>
            {/**HEADER SECTION */}
            <Header title='Orders' navigation={navigation} />
        </View>
    )
}

export default Order
