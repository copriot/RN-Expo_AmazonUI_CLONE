import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Router from "./src/navigation/Router";
import { watergreen } from "./src/colors";
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: watergreen }}>
      <StatusBar backgroundColor={watergreen} barStyle={"light-content"} />
      <Router />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});