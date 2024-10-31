import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RecommentProduct from "../assets/recommend.jpg";
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgStyle} source={RecommentProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.dealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>15.999 ₺</Text>

          <Text style={styles.actualPrice}>19.900 ₺</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <TouchableOpacity>
          <Text style={styles.allDeals}>See All Deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 5 },
  imgStyle: { height: 250, width: "100%" },
  bottomSection: { paddingHorizontal: 10 },
  row: { flexDirection: "row", alignItems: "center" },
  dealBtn: {
    backgroundColor: "red",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offDeal: { color: "#ffff", fontSize: 12 },
  deal: { color: "red", fontWeight: "600", marginLeft: 5, fontSize: 12 },
  discountPrice: { color: "#000000", fontSize: 16, marginVertical: 5 },
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  productName: {
    color: "#00000",
  },
  allDeals: { color: "#017185" },
  fontSize: 14,
});
