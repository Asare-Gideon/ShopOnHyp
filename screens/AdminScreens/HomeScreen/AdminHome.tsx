import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Sizes } from '../../../constants/Layout'

const AdminHome = () => {
    return (
        <View style={styles.main}>
            <Text></Text>
        </View>
    )
}

const styles =StyleSheet.create({
    main: {
        width: Sizes.width,
        backgroundColor: Colors.warmWhite,
        paddingTop: 24,
        flex: 1,
    }
})

export default AdminHome
