import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.img} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.img} />
            <Text style={styles.title}>Send Money </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.img} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.img} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item) => (
        <ServiceCard item={item} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: { marginTop: -80, paddingHorizontal: 10 },
  serviceContainer: { backgroundColor: "#ffff", borderRadius: 5 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  img: { height: 60, width: 60, borderRadius: 50 },
  title: { fontSize: 10, color: "#00000", marginTop: 5 },
  innerContainer: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
  },
});
