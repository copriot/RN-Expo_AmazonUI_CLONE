import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { watergreen, diffrentgreen, anothergreen, greey } from "../colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={[watergreen, diffrentgreen, anothergreen]}
      >
        <View style={styles.inputBox}>
          <FontAwesome name="search" size={24} color={greey} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  inputBox: {},
});
