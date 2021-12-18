import { AntDesign, Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AccountComponent from "../../components/AccountComponent";
import { Colors } from "../../constants/Layout";
import { styles } from "./style";

const Account = () => {
    // MY ACCOUNT DATA
  const myAccount = [
    {
      Icon: AntDesign,
      title: "Orders",
      IconName: "layout",
    },
    {
      Icon: FontAwesome,
      title: "Inbox",
      IconName: "envelope-o",
    },
    {
      Icon:MaterialIcons,
      title: "Pending Review",
      IconName: "pending-actions",
    },
  ];
  //SETTINGS DATA
const settings = [
     {
      title: "Detail",
    },
    {
      title: "Profile",
    },
    {
      title: "Change password",
    },
]
  return (
    <View style={styles.main}>
      <View style={styles.headerCont}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Account</Text>
          <TouchableOpacity style={styles.logBtn}>
            <MaterialIcons name="logout" color={Colors.white} size={23} />
            <Text style={{color: "white"}}>logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.welcomeCont}>
          <Text style={styles.welcomeText}>Welcome Asare!</Text>
          <Text style={styles.welcomeEmail}>asaregideon@gamil.com</Text>
        </View>
      </View>
      <ScrollView style={styles.mainContent}>
        {/*MY ACCOUNT */}
        <Text style={styles.contentHeaderText}>My Account</Text>
        <View style={styles.content}>
          {myAccount.map((item, index) => (
            <AccountComponent
              key={index}
              Icon={item.Icon}
              IconName={item.IconName}
              title={item.title}
            />
          ))}
        </View>
        {/*ACCOUNT SETTINGS */}
        <Text style={styles.contentHeaderText}>Settings</Text>
        <View style={styles.content}>
          {settings.map((item, index) => (
            <AccountComponent
              key={index}
              title={item.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;
