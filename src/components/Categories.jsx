import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Category } from "../data/Categories";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate("ProductScreen")}
        >
          <Image source={item.image} style={styles.img} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: { padding: 10 },
  img: { width: 50, height: 50 },
  title: { color: colors.textColor },
  category: { paddingHorizontal: 8, alignItems: "center" },
});
