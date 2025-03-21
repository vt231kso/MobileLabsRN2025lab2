import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.header}>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image source={require("../assets/search (2).png")} style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    color: "white",
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
});
