import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./style";
import Slider from "../../../components/Slider";
import { detailSliderData, itemsData } from "../../../constants/Data";
import { Colors } from "../../../constants/Layout";
import Items from "../../../components/Items";
import { homeStackProp } from "../../../Types";
import Header from "../../../components/Header";

const Detail = ({ navigation }: homeStackProp) => {
  const [loved, setLoved] = React.useState<boolean>(false);

  const renderSimilarProducts = ({ item }: any) => (
    <Items
      navigation={navigation}
      image={item.image}
      title={item.title}
      text={item.text}
      price={item.price}
    />
  );
  const handleLove = () => {
    setLoved((prev) => !prev);
  };
  

  return (
    <View style={styles.main}>
      <Header title="Details" navigation={navigation} />
      <ScrollView style={styles.mainContent}>
        {/* IMAGE SLIDER */}
        <View style={styles.slider}>
          <Slider data={detailSliderData} isDetail={true} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.descriptionHeader}>
            <Text style={styles.descriptionHearderText}>
              This is the Header
            </Text>
            {loved ? (
              <TouchableOpacity onPress={handleLove}>
                <AntDesign name="heart" color="red" size={24} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleLove}>
                <AntDesign
                  name="hearto"
                  color={Colors.deepDarkGray}
                  size={24}
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.descriptionText}>
            this is the description of the products this is the description of
            the products
          </Text>

          <View style={styles.priceMain}>
            <View style={styles.priceCont}>
              <Text style={styles.price}>Price:</Text>
              <Text style={styles.amount}>GH₵ 400</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <Ionicons name="chatbox-ellipses-outline" size={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cartsBtn}>
            <Text style={styles.cartsBtnText}>Add to Carts</Text>
          </TouchableOpacity>

          {/*VENDOR'S DETAILS */}
          <Text style={styles.sellerInfoHeader}>SELLER INFROMATION</Text>
          <View style={styles.sellerInfoCont}>
            <TouchableOpacity style={styles.sellerDetailBtn} onPress={() => navigation.navigate("SellerHome")}>
              <Text>ROCT STORE</Text>
              <AntDesign name="right" size={20} />
            </TouchableOpacity>
            <View style={styles.sellerFollowerCont}>
              <View>
                <Text>93% Seller Score</Text>
                <Text>400 Followers</Text>
              </View>
              <TouchableOpacity style={styles.followerBtn}>
                <Text style={styles.followerText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* SIMILAR PRODUCTS */}
          <Text style={styles.similarHeaderText}>
            Product you may also like
          </Text>
          <FlatList
            data={itemsData}
            renderItem={renderSimilarProducts}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
