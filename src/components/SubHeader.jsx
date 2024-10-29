import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../colors";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.watergreen, colors.diffrentgreen, colors.anothergreen]}
    >
      <Feather name="map-pin" size={16} color={"#0000000"} />
      <Text style={styles.deliver}>Delive to Turkey - 232422</Text>
      <SimpleLineIcons name="arrow-down" color={"#0000000"} size={10} />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  deliver: {
    fontSize: 13,
    paddingHorizontal: 6,
    color: colors.greey,
  },
});
