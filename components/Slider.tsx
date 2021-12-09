import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors, Sizes } from "../constants/Layout";
import { sliderProp } from "../Types";
import ImageSlider from "./ImageSlider";

const Slider = ({ data, isDetail }: sliderProp) => {
  const { width: windowWidth } = Dimensions.get("window");
  var carouselRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const renderItem = ({ item, index }: any) => {
    return <ImageSlider image={item.image} isDetail={isDetail? true: false} />;
  };
  const Renderpagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          backgroundColor: Colors.transparent,
          width:isDetail? windowWidth :  windowWidth * 0.92,
          alignSelf: "center",
          bottom:isDetail? -60 : 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.primary,
        }}
        inactiveDotStyle={{
          backgroundColor:isDetail ? Colors.deepDarkGray : Colors.white,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <View style={[styles.main, {
      height: isDetail? 260: 160,
      
    }]}>
      <Carousel
      style={{
       height: 170,
      }}
        ref={(c: any) => {
          carouselRef = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={isDetail? windowWidth : windowWidth * 0.92}
        layout={isDetail ? "stack" : "tinder"}
        layoutCardOffset={10}
        onSnapToItem={(index) => setActiveSlide(index)}
        inactiveSlideOpacity={0.6}
        inactiveSlideScale={1}
        autoplay={isDetail? false : true}
        enableMomentum={isDetail? true : false}
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
  },
  main: {
    width: Sizes.width,
    marginTop: 10,
  },
});
export default Slider;
