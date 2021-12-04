import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors, Sizes } from "../constants/Layout";
import ImageSlider from "./ImageSlider";

const Slider = ({ data }: any) => {
  const { width: windowWidth } = Dimensions.get("window");
  var carouselRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const renderItem = ({ item, index }: any) => {
    return <ImageSlider image={item.image} />;
  };
  const Renderpagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          backgroundColor: Colors.transparent,
          width: windowWidth * 0.92,
          alignSelf: "center",
          bottom: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.primary,
        }}
        inactiveDotStyle={{
          backgroundColor: Colors.white,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <View style={styles.main}>
      <Carousel
        ref={(c: any) => {
          carouselRef = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.92}
        layout={"tinder"}
        layoutCardOffset={10}
        onSnapToItem={(index) => setActiveSlide(index)}
        inactiveSlideOpacity={0.6}
        inactiveSlideScale={1}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={4000}
        loop={true}
      />
      <Renderpagination />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  main: {
    width: Sizes.width,
    height: 160,
    marginTop: 10,
  },
});
export default Slider;
