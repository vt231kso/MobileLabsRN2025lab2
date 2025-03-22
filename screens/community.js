import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Switch } from "react-native";
import Header from "../components/header";
import { useTheme } from "../components/ThemeContext";

const CommunityBlock = ({ title, time, mainText, subText, likes, comments }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View style={[styles.block, { backgroundColor: isDark ? "#2c2f3f" : "#f0f0f0" }]}>
      <View>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
            <Image source={require("../assets/chaticon.png")} />
            <View style={styles.textBlock}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Text style={[styles.blockHeader, { color: isDark ? "white" : "black" }]}>{title}</Text>
                <View style={styles.newsTag}><Text style={styles.textBlockNewsText}>News</Text></View>
              </View>
              <Text style={[styles.time, { color: isDark ? "#7B8D9D" : "#505050" }]}>{time}</Text>
            </View>
          </View>
          <Image source={require("../assets/more-horizontal.png")} />
        </View>
        <View style={styles.contentBlock}>
          <Image source={require("../assets/chatimage.png")} />
          <Text style={[styles.blockMainText, { color: isDark ? "white" : "black" }]}>{mainText}</Text>
          <Text style={[styles.blockMainTextTwo, { color: isDark ? "#7B8D9D" : "#606060" }]}>{subText}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <View style={styles.footerItem}>
              <Image source={require("../assets/thumbs-up (1).png")} />
              <Text style={[styles.likeText, { color: isDark ? "#00D44B" : "#007722" }]}>{likes}</Text>
            </View>
            <View style={styles.footerItem}>
              <Image source={require("../assets/message-square.png")} />
              <Text style={[styles.mesText, { color: isDark ? "#4B5664" : "#505050" }]}>{comments}</Text>
            </View>
          </View>
          <Image source={require("../assets/Group.png")} />
        </View>
      </View>
    </View>
  );
};

export default function Community() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const buttons = ["Search", "All", "ScreenShots", "Artwork", "Workland"];
  const posts = [
    {
      id: "1",
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
      subText: "Coral Castle Museum is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
      likes: 324,
      comments: 12,
    },
    {
      id: "2",
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
      subText: "Coral Castle Museum is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
      likes: 324,
      comments: 12,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#1c202c" : "#F5F5F5" }]}>
      <View style={styles.content}>
        <Header title="Community" />

        <View style={styles.switchContainer}>
          <Text style={[styles.label, { color: isDark ? "white" : "black" }]}>Dark Mode</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        <Text style={[styles.text, { color: isDark ? "#7B8D9D" : "#303649" }]}>Community and official content for all games and software</Text>

        <View style={styles.buttonsContainer}>
          {buttons.map((text, index) => (
            <TouchableOpacity key={index} style={[styles.button, { backgroundColor: isDark ? "#303649" : "#D1D1D1" }]}>
              <Text style={[styles.buttonText, { color: isDark ? "white" : "black" }]}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList data={posts} keyExtractor={(item) => item.id} renderItem={({ item }) => <CommunityBlock {...item} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { marginTop: 20, marginLeft: 20, flex: 1, marginRight: 10 },
  switchContainer: { flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between" },
  label: { fontSize: 16 },
  text: { fontSize: 14, lineHeight: 18 },
  buttonsContainer: { flexDirection: "row", gap: 10, marginTop: 15 },
  button: { padding: 10, height: 42, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  buttonText: { lineHeight: 22, textAlign: "center", fontSize: 14 },
  block: { margin: 10, padding: 10, borderRadius: 8 },
  blockHeader: { fontSize: 16 },
  newsTag: { backgroundColor: "#B63DB6", borderRadius: 3, width: 32, height: 14, justifyContent: "center", alignItems: "center" },
  textBlockNewsText: { fontSize: 10, color: "white" },
  time: { fontSize: 12 },
  footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  footerLeft:{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start",gap:5},
  footerItem: { flexDirection: "row", alignItems: "center", gap: 3 },
});
