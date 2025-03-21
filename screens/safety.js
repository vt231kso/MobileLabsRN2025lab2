import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../components/header";
import Tabs from "../components/tabs";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("safety");
  const tabs = [
    { id: "chats", label: "Guard" },
    { id: "friends", label: "Confirmations" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header title="Safety" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        {/* Картинка */}
        <ImageBackground
          source={require("../assets/Stroke 1.png")}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.text}>Logged in as player</Text>
          <Text style={styles.textOther}>N5KCV</Text>
          <View style={styles.statusBar}>
            <View style={styles.indicator} />
          </View>
        </ImageBackground>




        <Text style={styles.textsmth}>
          You’ll enter your code each time you enter your password to sign in to your Steam account.
        </Text>
        <Text style={styles.textLast}>
          Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.
        </Text>

        {/* Кнопки */}
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.firstButton]}>
            <Text style={styles.btnText}>Remove Authenticator</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>My Recovery Code</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.lastButton]}>
            <Text style={styles.btnText}>Help</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C202C",
    flex: 1,
  },
  content: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  imageBackground: {
    width: 350,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    color: "#7B8D9D",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
    letterSpacing: -0.15,
  },
  textOther: {
    textAlign: "center",
    color: "white",
    fontSize: 54,
    letterSpacing: 5.52,
    fontWeight: "700",
    marginTop: 5,
  },
  statusBar: {
    height: 7, // Висота статус-бару
    backgroundColor: "#2A3B4D", // Тло статус-бару
    marginTop: 10,
    borderRadius: 2,
    width: 114,
    alignItems: "center",
  },
  indicator: {
    height: 7,
    width: 50, // Ширина індикатора
    backgroundColor: "#2FB4F1", // Синій індикатор
    borderRadius: 2,
  },
  textsmth: {
    color: "white",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.28,
    marginTop: 20,
    marginBottom: 10,
  },
  textLast: {
    color: "#2FB4F1",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.15,
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1c2c37",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#1C202C",
  },
  firstButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: -0.32,
    lineHeight: 22,
  },
});
