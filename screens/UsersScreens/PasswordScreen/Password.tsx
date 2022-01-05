import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import Header from "../../../components/Header";
import { accouontProp } from "../../../Types";
import { styles } from "./style";
import { Button } from 'react-native-elements';
import { Colors } from "../../../constants/Layout";
const Password = ({ navigation }: accouontProp) => {
  return (
    <View style={styles.main}>
      {/** HEADER SECTION */}
      <Header title="Change Password" navigation={navigation} />
      <ScrollView style={styles.contentCont}>
        <View style={styles.inputCont}>
          <Input placeholder="Reset password" />
          <Input placeholder="Comfirm password" />

          <Button
            title={"Save"}
            buttonStyle={{
                backgroundColor: Colors.primary 
            }}
            containerStyle={{
              width: "80%",
              marginHorizontal: 50,
              marginVertical: 10,
              alignSelf: "center",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Password;
