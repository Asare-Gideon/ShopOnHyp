import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./style";
import Slider from "../../components/Slider";
import { detailSliderData, itemsData } from "../../constants/Data";
import { Colors } from "../../constants/Layout";
import Items from "../../components/Items";
import { homeStackProp } from "../../Types";

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
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" color={Colors.white} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
      </View>
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
            this is the description about the products this is the description
            about the products
          </Text>

          <View style={styles.priceCont}>
            <Text style={styles.price}>Price:</Text>
            <Text style={styles.amount}>GH₵ 400</Text>
          </View>

          <TouchableOpacity style={styles.cartsBtn}>
            <Text style={styles.cartsBtnText}>Add to Carts</Text>
          </TouchableOpacity>

          {/* SIMILAR PRODUCTS */}
          <Text style={styles.similarHeaderText}>
            Products you may also like
          </Text>
          <FlatList
            data={itemsData}
            renderItem={renderSimilarProducts}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
