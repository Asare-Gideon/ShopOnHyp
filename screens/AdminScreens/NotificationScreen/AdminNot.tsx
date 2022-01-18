import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Sizes } from '../../../constants/Layout'

const AdminNot = () => {
    return (
        <View style={styles.main}>
            <Text>hello there</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Sizes.paddingTop,
        width: Sizes.width,
        backgroundColor: Colors.warmWhite,
    }
})

export default AdminNot
