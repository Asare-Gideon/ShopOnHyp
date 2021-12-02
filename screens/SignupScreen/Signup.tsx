import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { initialPageProp } from "../../Types";
import { styles } from "./Style";

const Signup = ({navigation}:initialPageProp) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}></View>
      <View style={styles.bottom}></View>
      <View style={styles.mainContent}>
        <Text style={styles.headerText}>SIGNUP</Text>

        {/* INPUT CONTENT */}
        <ScrollView style={styles.inputContainer}>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Full Name</Text>
            <Input style={styles.input} placeholder="John Brat" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Username</Text>
            <Input style={styles.input} placeholder="example@gmail.com" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Password</Text>
            <Input style={styles.input} placeholder="************" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Comfirm Password</Text>
            <Input style={styles.input} placeholder="************" />
          </View>
          {/* LOGIN BUTTON */}
          <View style={styles.loginBtnCont}>
            <Button
              title="Login"
              buttonStyle={styles.loginBtn}
              containerStyle={styles.btnCont}
              raised
            />
            <TouchableOpacity style={styles.newAccount} onPress={() => navigation.navigate("Login")} >
              <Text style={styles.newAccountText}>
                Already have and account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
