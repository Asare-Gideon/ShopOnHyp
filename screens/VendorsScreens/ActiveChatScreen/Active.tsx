import React, { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useAppDispatch } from "../../../app/reduxHooks/hooks";
import Header from "../../../components/Header";
import { setBottomNav } from "../../../features/utilitySlice/bottomSlice";
import { vendorChatProp } from "../../../Types";
import { styles } from "./styles";

const Active = ({ navigation }: vendorChatProp) => {
    const handleNav = () => {
        navigation.navigate("ChatScreen")
        dispatch(setBottomNav(true))
    }
    const dispatch = useAppDispatch();
    
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(setBottomNav(false));
    });
  }, []);

  return (
    <View style={styles.main}>
      <Header title="Active Chat" navigation={navigation} />
      <ScrollView style={styles.contentCont}>
        <TouchableOpacity style={styles.btnContainer} onPress={handleNav}>
          <View>
            <Text style={styles.name}>Adoma Biskmark</Text>
            <Text style={styles.message}>message goes in here</Text>
          </View>
          <View>
            <Text style={styles.time}>5:40</Text>
            <Text style={styles.badge}>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handleNav}>
          <View>
            <Text style={styles.name}>Asare Gideon</Text>
            <Text style={styles.message}>message goes in here</Text>
          </View>
          <View>
            <Text style={styles.time}>3:40</Text>
            <Text style={styles.badge}>5</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Active;
