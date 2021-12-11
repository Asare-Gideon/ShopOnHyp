import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import Categories from "../../components/Categories";
import Items from "../../components/Items";
import { categoriesData, itemsData, sliderData } from "../../constants/Data";
import { styles } from "./style";
import Slider from "../../components/Slider";
import { homeStackProp } from "../../Types";
import { useAppDispatch } from "../../app/reduxHooks/hooks";
import { setBottomNav } from "../../features/utilitySlice/bottomSlice";

const Home = ({ navigation }: homeStackProp) => {
  const [data, setData] = useState(categoriesData);
  const dispatch = useAppDispatch();

  const handleSelected = (category: any) => {
    const selectedItem = data.map((item) => {
      if (category.id == item.id) {
        return {
          ...item,
          selected: true,
        };
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
    setData(selectedItem);
  };
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(setBottomNav(false));
    });
  }, []);

  const renderCategories = ({ item }: any) => (
    <Categories
      handle={() => handleSelected(item)}
      toggle={item.selected}
      title={item.title}
    />
  );
  const renderItems = ({ item }: any) => (
    <Items
      like={true}
      price={item.price}
      text={item.text}
      image={item.image}
      title={item.title}
      navigation={navigation}
    />
  );
  return (
    <View style={styles.main}>
      {/* SEARCH BAR CONTENT */}
      <View style={styles.searchCont}>
        <View style={styles.searchInputCont}>
          <Input
            style={styles.searchInput}
            inputContainerStyle={styles.inputCont}
            placeholder="categories"
            leftIcon={<AntDesign name="search1" size={22} />}
          />
        </View>
        <TouchableOpacity
          style={styles.bellCont}
          onPress={() => navigation.navigate("Notification")}
        >
          <Feather name="bell" size={25} />
        </TouchableOpacity>
      </View>
      {/* Categories list */}
      <View style={styles.categoriesCont}>
        <FlatList
          renderItem={renderCategories}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/*Main ScrollView */}
      <ScrollView>
        {/*SLIDER */}
        <Slider data={sliderData} />
        {/*MAIN CONTENT */}

        <View style={styles.mainContent}>
          <Text style={styles.contentHeader}>All products</Text>

          <FlatList
            data={itemsData}
            renderItem={renderItems}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.itemsContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
