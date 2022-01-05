import React from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { Colors, Fonts } from '../constants/Layout'
import { textInputProp } from '../Types'

const TextInput = ({name}:textInputProp) => {
    return (
        <View style={{
            marginBottom: 15
        }}>
            <Input placeholder={name}  />
        </View>
    )
}

export default TextInput
