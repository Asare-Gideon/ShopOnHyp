import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Sizes } from "../../../constants/Layout";

const AdminPost = () => {
  return (
    <View style={styles.main}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    flex: 1,
    backgroundColor: Colors.warmWhite,
    paddingTop: 24,
  },
});

export default AdminPost;
