import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../constants/Layout'
import { categoriesProp } from '../Types'

const Categories = ({title,toggle}: categoriesProp) => {
    return (
       <TouchableOpacity style={{
           paddingLeft: 12,
           paddingRight: 4
       }}>
           <Text style={{
               ...Fonts.body2,
               color:toggle? Colors.black :  Colors.deepDarkGray
           }}>{title}</Text>
       </TouchableOpacity> 
    )
}

export default Categories
