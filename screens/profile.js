import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useTheme } from "../components/ThemeContext"; // Імпортуємо контекст теми

export default function Profile() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#1C202C" : "#F5F5F5" }]}>
      <View style={styles.content}>
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 5 }}>
          <Image style={{ width: 98, height: 98 }} source={require("../assets/Group 4.png")} />
          <Text style={[styles.txtprofile, { color: isDark ? "white" : "black" }]}>Firstname Laddddstname</Text>
          <Text style={[styles.txtprofile, { color: isDark ? "white" : "black" }]}>Group</Text>
        </View>

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

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.firstButton,
              { backgroundColor: isDark ? "#303649" : "#D1D1D1" },
            ]}
          >
            <Text style={[styles.btnText, { color: isDark ? "white" : "black" }]}>Settings</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.lastButton,
              { backgroundColor: isDark ? "#303649" : "#D1D1D1" },
            ]}
          >
            <Text style={[styles.btnText, { color: isDark ? "white" : "black" }]}>LogOut</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
        </View>
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
    marginTop: 20,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  buttons: {
    marginTop: 20,
  },
  button: {
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
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: -0.32,
    lineHeight: 22,
  },
  txtprofile: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.18,
  },
});
