import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import Tabs from "../components/tabs";
import { useTheme } from "../components/ThemeContext"; // Імпортуємо контекст теми

export default function Chat() {
  const { theme } = useTheme(); // Отримуємо активну тему
  const isDark = theme === "dark"; // Перевіряємо, чи тема темна

  const [activeTab, setActiveTab] = useState("chats");
  const tabs = [
    { id: "chats", label: "Open chats" },
    { id: "friends", label: "My friends" },
  ];

  // Масив даних чатів
  const chats = [
    { id: 1, userName: "Mark Dyson", message: "I'm already starting to play • 14 Jun", avatar: require("../assets/Group 7.png"), pointIcon: require("../assets/point.png") },
    { id: 2, userName: "Mark Dyson", message: "You:Ok • 14 Jun", avatar: require("../assets/Group 7.png"), pointIcon: require("../assets/Group 6.png") },
    { id: 3, userName: "Alice Cooper", message: "You:Ok • 14 Jun", avatar: require("../assets/Group 4.png"), pointIcon: require("../assets/Group 6.png") },
    { id: 4, userName: "Alice Cooper", message: "You:Ok • 14 Jun", avatar: require("../assets/Group 4.png"), pointIcon: require("../assets/Group 6.png") },
    { id: 5, userName: "Player123", message: "Hello • 12 Jun", avatar: require("../assets/Group 4 (1).png")  },
    { id: 6, userName: "Player123", message: "Hello • 12 Jun", avatar: require("../assets/Group 4 (1).png") },
    { id: 7, userName: "Express", message: "Ok", avatar: require("../assets/Group 4 (2).png") },
    { id: 8, userName: "Express", message: "Ok", avatar: require("../assets/Group 4 (2).png") },
    { id: 9, userName: "Express", message: "You:Ok", avatar: require("../assets/Group 4 (2).png") },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#1C202C" : "#F5F5F5" }]}>
      <View style={styles.content}>
        <Header title="Chat" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <ScrollView style={styles.blocks}>
          {chats.map(chat => (
            <View key={chat.id} style={styles.chat}>
              <View style={styles.chatBlock}>
                <Image source={chat.avatar} />
                <View>
                  <Text style={[styles.userText, { color: isDark ? "white" : "black" }]}>{chat.userName}</Text>
                  <Text style={[styles.mesChat, { color: isDark ? "#7B8D9D" : "#4A4A4A" }]}>{chat.message}</Text>
                </View>
              </View>
              {chat.pointIcon && <Image source={chat.pointIcon} />}
            </View>
          ))}
        </ScrollView>
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
  blocks: {
    marginTop: 20,
  },
  chatBlock: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15, // Між блоками чату
  },
  userText: {
    fontSize: 16,
    letterSpacing: -0.18,
    fontWeight: "400",
  },
  mesChat: {
    fontSize: 14,
    letterSpacing: -0.15,
  },
});
