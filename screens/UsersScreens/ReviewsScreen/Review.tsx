import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../../components/Header'
import { accouontProp } from '../../../Types'
import { styles } from './style'

const Review = ({navigation}:accouontProp) => {
    return (
        <View style={styles.main}>
            {/** HEADER SECTION */}
            <Header title='Reviews' navigation={navigation} /> 
             <ScrollView style={styles.contentCont}>

             </ScrollView>
        </View>
    )
}

export default Review
