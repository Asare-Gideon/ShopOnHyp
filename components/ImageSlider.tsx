import React from 'react'
import { View, Text, Image } from 'react-native'
import { Sizes } from '../constants/Layout'
import { imageSliderProp } from '../Types'

const ImageSlider = ({image,isDetail}:imageSliderProp) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            borderRadius: 5
        }}>
            <Image source={image} style={{
                width: "100%",
                  height: "100%",
                  borderBottomLeftRadius:isDetail ? 0: 10,
                  borderBottomRightRadius: isDetail ? 0 : 10,
                  borderTopLeftRadius:isDetail ? 40 : 10 ,
                  borderTopRightRadius: isDetail ? 40 : 10,    
            }} />
        </View>
    )
}

export default ImageSlider
