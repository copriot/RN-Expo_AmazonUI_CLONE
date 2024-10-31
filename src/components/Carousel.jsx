import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";
const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButton={false}
        autoplay={true}
      >
        {CarouselData.map((item) => (
          <View>
            <Image source={item.image} style={styles.img} key={item.id} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: { position: "relative" },
  wrapper: { height: 300, width: "100" },
  img: { height: 250, width: "100%" },
});
