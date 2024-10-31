import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentTitle}>{item.title}</Text>
      <Image style={styles.img} source={item.image} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentTitle: {
    fontSize: 13,
    marginBottom: 8,
    color: "#00000",
  },
  img: { width: "100%", height: 130 },
});
