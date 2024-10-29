import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../colors";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={[colors.watergreen, colors.diffrentgreen, colors.anothergreen]}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <FontAwesome name="search" size={24} color={colors.greey} />
            <TextInput
              placeholder="Search Amazon..."
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={24} color={colors.greey} />
        </View>
        <FontAwesome name="microphone" size={24} color={colors.greey} />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderColor: colors.greey,
    borderWidth: 1,
    width: width * 0.9,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.02,
    borderRadius: 10,
  },
  textInput: { paddingVertical: 8 },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
