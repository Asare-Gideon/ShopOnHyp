import React from 'react'
import { View, Text } from 'react-native'
import { Colors, Fonts } from '../constants/Layout'
import { cardProp } from '../Types'

const Card = ({title,text,Icon,lightColor,color,iconName}: cardProp) => {
    return (
        <View style={{
            backgroundColor: "#efefef",
            width:"46%" ,
            padding: 10,
            elevation: 1,
            marginLeft: 10,
            marginBottom: 15
        }}>
            <View style={{
                width: 55,
                height: 55,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: lightColor? lightColor :  "#e9d9cd",
                borderRadius: 10
            }}>
                <Icon name={iconName} size={30} color={color? color: "#e9731d"} />
            </View>
            <Text style={{
                ...Fonts.body2,
                color: Colors.deepDarkGray,
                marginBottom: 15,
                marginTop: 10
            }}>{title}</Text>
            <Text style={{
                ...Fonts.body2,
                paddingBottom: 5,
                fontSize: 25,
                color: Colors.darkgray
            }}>{text}</Text>
        </View>
    )
}

export default Card
