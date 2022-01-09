import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import Message from "../../../components/Message";
import { chatData } from "../../../constants/Data";
import images from "../../../constants/Images";
import { vendorChatProp } from "../../../Types";
import { styles } from "./styles";

const ChatMessage = ({navigation}:vendorChatProp) => {
    const handleNav = () => {
        navigation.navigate("ActiveChat")
    }

const renderChat = ({item}: any) =>  (
       <Message
        name={item.name}
        image={item.image}
        time={item.time}
        number={3}
        message={item.message}
        handle={handleNav}
      /> 
)

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>
    <ScrollView style={styles.contentCont}>
        <FlatList 
         data={chatData} 
         renderItem={renderChat}
         keyExtractor={(item) => item.id }
        />
    </ScrollView>

    </View>
  );
};

export default ChatMessage;
