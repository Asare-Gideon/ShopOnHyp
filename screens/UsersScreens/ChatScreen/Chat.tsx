import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Input from "../../../components/Input";
import { Colors } from "../../../constants/Layout";
import { homeStackProp } from "../../../Types";
import { styles } from "./style";

const Chat = ({navigation}: homeStackProp) => {
  return (
    <View style={styles.main}>
      {/** header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="arrowleft" color={Colors.white} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Rock Store</Text>
      </View>
      {/**CHAT CONTENT */}
      <ScrollView style={styles.contentCont}>
          {/**RECEIVED MESSAGES */}
        <View style={styles.receivedMessage}>
          <Text style={styles.receivedMessageText}>
            Hello there! please how can
          </Text>
          <Text style={styles.receivedTime}>5:40 pm</Text>
        </View>

        <View style={styles.receivedMessage}>
          <Text style={styles.receivedMessageText}>
            Hello there! please how can Hello there! please how can Hello there!
            please how can Hello there! please how can Hello there! please how
            can
          </Text>
          <Text style={styles.receivedTime}>5:40 pm</Text>
        </View>
       {/**SENT MESSAGES */} 
        <View style={styles.sentMessage}>
           <Text style={styles.sentMessageText}>
               Hello please how may i help you
           </Text>
          <Text style={styles.sentTime}>5:40 pm</Text>
        </View>
        <View style={styles.sentMessage}>
           <Text style={styles.sentMessageText}>
               Hello please how may i help you
               Hello please how may i help you
               Hello please how may i help you
           </Text>
          <Text style={styles.sentTime}>5:40 pm</Text>
        </View>
          {/**RECEIVED MESSAGES */}
        <View style={styles.receivedMessage}>
          <Text style={styles.receivedMessageText}>
            Hello there! please how can
            Hello there! please how can
            Hello there! please how can
          </Text>
          <Text style={styles.receivedTime}>5:40 pm</Text>
        </View>
       {/**SENT MESSAGES */} 
        <View style={styles.sentMessage}>
           <Text style={styles.sentMessageText}>
               Hello please how may i help you
           </Text>
          <Text style={styles.sentTime}>5:40 pm</Text>
        </View>

          {/**RECEIVED MESSAGES */}
        <View style={styles.receivedMessage}>
          <Text style={styles.receivedMessageText}>
            Hello there! please how can
            Hello there! please how can
            Hello there! please how can
          </Text>
          <Text style={styles.receivedTime}>5:40 pm</Text>
        </View>
        <View style={styles.space}></View>
      </ScrollView>
      <View style={styles.inputCont}>
        <Input />
      </View>
    </View>
  );
};

export default Chat;
