import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../../components/Header'
import { accouontProp } from '../../../Types'
import { styles } from './style'

const Password = ({navigation}: accouontProp) => {
    return (
       <View style={styles.main}>
            {/** HEADER SECTION */}
            <Header title='Change Password' navigation={navigation} /> 
             <ScrollView style={styles.contentCont}>

             </ScrollView>
        </View>
    )
}

export default Password
