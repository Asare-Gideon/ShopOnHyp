import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../constants/Layout'
import { categoriesProp } from '../Types'

const Categories = ({title,toggle, handle}: categoriesProp) => {
    return (
       <TouchableOpacity onPress={handle} style={{
           paddingLeft: 12,
           paddingRight: 4,
           paddingBottom: 10
       }}>
           <Text style={{
               ...Fonts.body2,
               color:toggle? Colors.black :  Colors.deepDarkGray,
               borderBottomWidth: 3,
               borderBottomColor: toggle? Colors.black : Colors.warmWhite
           }}>{title}</Text>
       </TouchableOpacity> 
    )
}

export default Categories
