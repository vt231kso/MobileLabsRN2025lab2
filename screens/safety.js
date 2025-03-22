import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Switch } from "react-native";
import Header from "../components/header";
import Tabs from "../components/tabs";
import { useTheme } from "../components/ThemeContext"; // Імпортуємо контекст теми

export default function Safety() {
  const { theme, toggleTheme } = useTheme(); // Використовуємо useTheme для доступу до теми та функції її зміни
  const [activeTab, setActiveTab] = useState("safety");

  const isDark = theme === "dark"; // Перевіряємо, чи темна тема

  const styles = getStyles(isDark);

  const tabs = [
    { id: "chats", label: "Guard" },
    { id: "friends", label: "Confirmations" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header title="Safety" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <View style={styles.themeContainer}>
          <Text style={styles.themeButtonText}>Switch to {isDark ? "Light" : "Dark"} Mode</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme} // Викликаємо toggleTheme для зміни теми
            trackColor={{ false: "#CCCCCC", true: "#303649" }}
            thumbColor={isDark ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

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

const getStyles = (isDark) => StyleSheet.create({
  container: {
    backgroundColor: isDark ? "#1C202C" : "#FFFFFF",
    flex: 1,
  },
  content: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  themeButtonText: {
    color: isDark ? "white" : "black",
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
    color: isDark ? "#7B8D9D" : "black",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
    letterSpacing: -0.15,
  },
  textOther: {
    textAlign: "center",
    color: isDark ? "white" : "black",
    fontSize: 54,
    letterSpacing: 5.52,
    fontWeight: "700",
    marginTop: 5,
  },
  statusBar: {
    height: 7,
    backgroundColor: "#2A3B4D",
    marginTop: 10,
    borderRadius: 2,
    width: 114,
    alignItems: "center",
  },
  indicator: {
    height: 7,
    width: 50,
    backgroundColor: "#2FB4F1",
    borderRadius: 2,
  },
  textsmth: {
    color: isDark ? "white" : "black",
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
    backgroundColor: isDark ? "#1c2c37" : "#DDDDDD",
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
    color: isDark ? "white" : "black",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: -0.32,
    lineHeight: 22,
  },
});
