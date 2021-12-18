import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../constants/Layout'
import { accountComponentProp } from '../Types'

const AccountComponent = ({Icon, IconName, title}: accountComponentProp) => {
    return (
     <TouchableOpacity
     style={{
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         marginRight: 10,
         borderBottomWidth: 0.3,
         
     }}>
         <View style={{
             flexDirection: "row",
             alignItems: "center",
             paddingTop: 10,
             paddingBottom: 10,
            paddingLeft: 6 
         }}>
             {Icon && (
            <Icon name={IconName} size={21} color={Colors.darkgray} />
             )}
            <Text style={{
                marginLeft: 8,
                ...Fonts.body2,
                color: Colors.darkgray
            }}>{title}</Text> 
         </View>
         <AntDesign name='right' size={20} />
     </TouchableOpacity>   
    ) 
}

export default AccountComponent
