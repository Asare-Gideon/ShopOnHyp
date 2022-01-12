import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../constants/Layout';
import { notProp } from '../Types'

const Nott = ({name,message,time}: notProp) => {
const [textUpdate, setTextUpdate] = useState<string>("");

  useEffect(() => {
    if (message.length > 41) {
      const newText = message.substr(0, 41).concat("...");
      setTextUpdate(newText);
    } else {
      setTextUpdate(message);
    }
  }, [message]);
  
    return (
        <TouchableOpacity style={{
        width: Sizes.width - 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10,
        borderBottomWidth: 0.3,
        alignSelf: "center",
        elevation: 2
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 4,
                paddingRight: 4
            }}>
                <View>
                    <Text style={{
                        ...Fonts.body2,
                        color: Colors.darkgray,
                    }}>{name}</Text>
                    <Text style={{
                        ...Fonts.body3,
                        color: Colors.deepDarkGray
                    }}>  {textUpdate} </Text>
                </View>
                <Text style={{
                    ...Fonts.body3,
                    color: Colors.deepDarkGray
                }}>{time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Nott
