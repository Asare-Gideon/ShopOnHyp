import React from "react";
import { View, Text, ScrollView } from "react-native";
import Nott from "../../../components/Nott";
import { styles } from "./styles";

const Notification = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

   <ScrollView>
       <Nott name="Name here" message="mesage content goes in here" time={"3: 00pm"} />
       <Nott name="Name here" message="mesage content goes in here" time={"3: 00pm"} />
       <Nott name="Name here" message="mesage content goes in here" time={"3: 00pm"} />
   </ScrollView>
    </View>
  );
};

export default Notification;
