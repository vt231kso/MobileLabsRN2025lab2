import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Store() {
  const buttons = ["Top Sellers", "Free to play", "Early access"];
  const products = [
    {
      image: require("../assets/Bitmap (2).png"),
      title: "Battlefield 4",
      platform: "Windows",
      newPrice: "$35",
    },
    {
      image: require("../assets/Bitmap (3).png"),
      title: "Factorio",
      platform: "Windows, Mac",
      newPrice: "$7",
    },
    {
      image: require("../assets/Group 10.png"),
      title: "Horizon Zero Dawn",
      platform: "Windows",
      newPrice: "$38",
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.navigationContainer}>
          <View style={styles.header}>
            <Image source={require("../assets/favicon.png")} style={styles.image} />
            <Text style={styles.title}>Store</Text>
          </View>
          <Image source={require("../assets/search (2).png")} style={{ width: 16, height: 16 }} />
        </View>

        <View style={styles.imageContainer}>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <Image source={require("../assets/Bitmap (1).png")} style={styles.picture} />
            <Image source={require("../assets/Bitmap (1).png")} style={styles.picture} />
          </View>

          <Image source={require("../assets/Group 5.png")} style={{ top: -100, left: 20 }} />
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((text, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.block}>
          <Image source={require("../assets/Bitmap (1)n.png")} style={styles.blockPicture} />
          <View style={{ paddingLeft: 10, alignItems: "flex-start" }}>
            <Text style={styles.text}>Grand Theft Auto V</Text>
            <View style={styles.platformContainer}>
              <Image source={require("../assets/free-icon-windows-220215.png")} style={styles.blockIcon} />
              <Text style={styles.blockText}>Windows</Text>
            </View>
          </View>
          <View style={styles.price}>
            <View style={styles.priceRow}>
              <Text style={styles.priceOld}>$20</Text>
              <Text style={styles.priceText}>$10</Text>
            </View>
            <View style={styles.sale}>
              <Text style={styles.saleText}>-50%</Text>
            </View>
          </View>
        </View>

        {products.map((product, index) => (
          <View key={index} style={styles.block}>
            <Image source={product.image} style={styles.blockPicture} />
            <View style={{ paddingLeft: 10, alignItems: "flex-start" }}>
              <Text style={styles.text}>{product.title}</Text>
              <View style={styles.platformContainer}>
                <Image source={require("../assets/free-icon-windows-220215.png")} style={styles.blockIcon} />
                <Text style={styles.blockText}>{product.platform}</Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>{product.newPrice}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c202c",
    flex: 1,
  },
  content: {
    marginLeft: 20,
    flex: 1,
    marginRight:10
  },
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
  picture: {
    borderRadius: 20,
    width: 340,
    height: 230,
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
    marginTop: 0,
  },


  button: {
    width: 103,
    height: 38,
    backgroundColor: "#303649",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
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
    color: "#7B8D9D",
    fontSize: 14,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  price: {
    marginLeft: "auto",
  },
  priceText: {
    fontSize: 18,
    color: "white",
  },
  priceOld: {
    fontSize: 12,
    color: "#ffffff",
    textDecorationLine: "line-through",
  },
  sale: {
    marginTop: 5,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#00D44B80",
  },
  saleText: {
    color: "white",
  },
  priceRow: {
    flexDirection: 'row',
    gap: 5,
  },
  platformContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
});
