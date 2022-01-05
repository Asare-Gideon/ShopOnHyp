import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../constants/Images'
import { Colors, Fonts } from '../constants/Layout'
import { avatarProp } from '../Types'

const Avatar = ({image,abv}: avatarProp) => {
const [text, setText] = React.useState("");

React.useEffect(() => {
    const abr = abv.substring(0,1)
    setText(abr);
},[abv])
    return (
       <TouchableOpacity style={{
           width: 55,
           height: 55,
           borderRadius: 50,
           borderWidth: 0.5,
           borderColor: Colors.darkgray,
           backgroundColor: Colors.darkgray,
           alignItems: 'center',
           justifyContent: "center",
           
       }}>
          {image && (<Image source={image} style={{
               height:"100%",
               width: "100%",
               borderRadius: 60,
               zIndex: 44
           }} />)} 
           <View style={{
               position: "absolute",
               bottom: 1,
               right: 0,
               zIndex: 55

           }}>
           <EvilIcons name='pencil' color={Colors.white} size={29} />
           </View>

               <Text style={{
                   ...Fonts.h1,
                   fontSize: 29,
                   color: Colors.white,
                   position: "absolute",
                   bottom: 10,
                   right: 17,
                   zIndex: 30
               }}>{text}</Text>
       </TouchableOpacity> 
    )
}

export default Avatar
