import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import Items from "../../components/Items";
import { styles } from "./style";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  return (
    <View style={styles.main}>
      {/* SEARCH BAR CONTENT */}
      <View style={styles.searchCont} >


        <View style={styles.searchInputCont}>
          <Input
            style={styles.searchInput}
            inputContainerStyle={styles.inputCont}
            placeholder="categories"
            leftIcon={<AntDesign name="search1" size={25} />}
          />
        </View>
        <TouchableOpacity style={styles.categoriesCont}>
          <Entypo name="notification" size={30} />
        </TouchableOpacity>
      </View>

      <ScrollView>
     <Items />
      </ScrollView>
    </View>
  );
};

export default Home;
