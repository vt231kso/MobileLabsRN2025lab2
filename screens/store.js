import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Switch } from "react-native";
import Header from "../components/header";
import { useTheme } from "../components/ThemeContext"; // Імпортуємо контекст теми

export default function Store() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const buttons = ["Top Sellers", "Free to play", "Early access"];
  const products = [
    {
      id: "1",
      image: require("../assets/Bitmap (2).png"),
      title: "Battlefield 4",
      platform: "Windows",
      newPrice: "$35",
    },
    {
      id: "2",
      image: require("../assets/Bitmap (3).png"),
      title: "Factorio",
      platform: "Windows, Mac",
      newPrice: "$7",
    },
    {
      id: "3",
      image: require("../assets/Group 10.png"),
      title: "Horizon Zero Dawn",
      platform: "Windows",
      newPrice: "$38",
    },
    {
      id: "4",
      image: require("../assets/Group 10.png"),
      title: "Horizon Zero Dawn",
      platform: "Windows",
      newPrice: "$39",
    },
    {
      id: "5",
      image: require("../assets/Group 10.png"),
      title: "Horizon Zero Dawn",
      platform: "Windows",
      newPrice: "$40",
    },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.block}>
      <Image source={item.image} style={styles.blockPicture} />
      <View style={{ paddingLeft: 10, alignItems: "flex-start" }}>
        <Text style={[styles.text, { color: isDark ? "white" : "black" }]}>{item.title}</Text>
        <View style={styles.platformContainer}>
          <Image source={require("../assets/free-icon-windows-220215.png")} style={styles.blockIcon} />
          <Text style={[styles.blockText, { color: isDark ? "#7B8D9D" : "#303649" }]}>{item.platform}</Text>
        </View>
      </View>
      <View style={styles.price}>
        <Text style={[styles.priceText, { color: isDark ? "white" : "black" }]}>{item.newPrice}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#1c202c" : "#F5F5F5" }]}>
      <View style={styles.content}>
        <Header title="Store" />

        {/* Перемикач теми */}
        <View style={styles.switchContainer}>
          <Text style={[styles.label, { color: isDark ? "white" : "black" }]}>Dark Mode</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        <View style={styles.imageContainer}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../assets/Bitmap (1).png")} style={styles.picture} />
            <Image source={require("../assets/Bitmap (1).png")} style={styles.picture} />
          </View>
          <Image source={require("../assets/Group 5.png")} style={{ top: -100, left: 20 }} />
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((text, index) => (
            <TouchableOpacity key={index} style={[styles.button, { backgroundColor: isDark ? "#303649" : "#D1D1D1" }]}>
              <Text style={[styles.buttonText, { color: isDark ? "white" : "black" }]}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FlatList для продуктів */}
        <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderProduct} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  picture: {
    borderRadius: 20,
    width: 340,
    height: 250,
    resizeMode: "contain",
  },
  imageContainer: {
    height: 250,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: 103,
    height: 42,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  blockPicture: {
    borderRadius: 5,
    width: 85,
    height: 60,
  },
  blockIcon: {
    width: 12.5,
    height: 12.5,
  },
  blockText: {
    fontSize: 14,
  },
  text: {
    fontSize: 16,
  },
  price: {
    marginLeft: "auto",
  },
  priceText: {
    fontSize: 18,
  },
  platformContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

