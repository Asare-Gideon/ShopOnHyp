import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { initialPageProp } from "../../Types";
import { styles } from "./style";

const Login = ({navigation}:initialPageProp) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.topText}>ShopOnHype</Text>
      </View>
      <View style={styles.bottom}></View>
      <View style={styles.mainContent}>
        <Text style={styles.headerText}>LOGIN</Text>

        {/* INPUT CONTENT */}
        <ScrollView style={styles.inputContainer}>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Username</Text>
            <Input style={styles.input} placeholder="example@gmail.com" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.lable}>Password</Text>
            <Input style={styles.input} placeholder="************" />
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotText}>Forgot your password</Text>
            </TouchableOpacity>
          </View>
          {/* LOGIN BUTTON */}
          <View style={styles.loginBtnCont}>
            <Button
              title="Login"
              buttonStyle={styles.loginBtn}
              containerStyle={styles.btnCont}
              raised
            />
            <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.newAccount}>
                <Text style={styles.newAccountText}>Dont have an account? Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
