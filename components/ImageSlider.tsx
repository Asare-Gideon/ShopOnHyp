import React from 'react'
import { View, Text, Image } from 'react-native'
import { Sizes } from '../constants/Layout'
import { imageSliderProp } from '../Types'

const ImageSlider = ({image}:imageSliderProp) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            borderRadius: 5
        }}>
            <Image source={image} style={{
                width: "100%",
                  height: "100%",
                  borderRadius: 10    
            }} />
        </View>
    )
}

export default ImageSlider
