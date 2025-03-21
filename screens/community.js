import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/header";

const CommunityBlock = ({ title, time, mainText, subText, likes, comments }) => {
  return (
    <View style={styles.block}>
      <View>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
            <Image source={require("../assets/chaticon.png")} />
            <View style={styles.textBlock}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Text style={styles.blockHeader}>{title}</Text>
                <View style={styles.newsTag}><Text style={styles.textBlockNewsText}>News</Text></View>
              </View>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
          <Image source={require("../assets/more-horizontal.png")} />
        </View>
        <View style={styles.contentBlock}>
          <Image source={require("../assets/chatimage.png")} />
          <Text style={styles.blockMainText}>{mainText}</Text>
          <Text style={styles.blockMainTextTwo}>{subText}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <View style={styles.footerItem}>
              <Image source={require("../assets/thumbs-up (1).png")} />
              <Text style={styles.likeText}>{likes}</Text>
            </View>
            <View style={styles.footerItem}>
              <Image source={require("../assets/message-square.png")} />
              <Text style={styles.mesText}>{comments}</Text>
            </View>
          </View>
          <Image source={require("../assets/Group.png")} />
        </View>
      </View>
    </View>
  );
};

export default function Community() {
  const buttons = ["Search", "All", "ScreenShots", "Artwork", "Workland"];
  const posts = [
    {
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
      subText: "Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
      likes: 324,
      comments: 12,
    },
    {
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
      subText: "Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
      likes: 324,
      comments: 12,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header title="Community" />
        <Text style={styles.text}>Community and official content for all games and software</Text>
        <View style={styles.buttonsContainer}>
          {buttons.map((text, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.blocksContainer}>
          {posts.map((post, index) => (
            <CommunityBlock key={index} {...post} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#1c202c", flex: 1 },
  content: { marginTop: 20, marginLeft: 20, flex: 1, marginRight: 10 },
  text: { width: 297, color: "#7B8D9D", fontSize: 14, letterSpacing: -0.15, lineHeight: 18 },
  buttonsContainer: { flexDirection: "row", gap: 10, marginTop: 15 },
  button: { padding: 10, height: 42, backgroundColor: "#303649", borderRadius: 8, justifyContent: "center", alignItems: "center" },
  buttonText: { lineHeight: 22, letterSpacing: -0.15, textAlign: "center", color: "white", fontSize: 14 },
  blocksContainer: { marginRight: 20, marginTop: 30 },
  block: { margin: 10 },
  blockHeader: { color: "white", fontSize: 16, letterSpacing: -0.32 },
  textBlockNewsText: { alignSelf: "center", fontSize: 10, color: "white" },
  time: { fontSize: 12, letterSpacing: -0.24, color: "#7B8D9D" },
  newsTag: { backgroundColor: "#B63DB6", borderRadius: 3, width: 32, height: 14, justifyContent: "center", alignItems: "center" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  contentBlock: { width: 330, marginTop: 15, borderBottomWidth: 1, paddingBottom: 15, borderBottomColor: "#303649" },
  blockMainText: { marginTop: 15, lineHeight: 22, fontWeight: "400", letterSpacing: -0.32, fontSize: 16, color: "white" },
  blockMainTextTwo: { marginTop: 15, lineHeight: 22, fontWeight: "400", fontSize: 14, color: "#7B8D9D",marginBottom: 5 },
  likeText: { color: "#00D44B" },
  mesText: { color: "#4B5664" },
  footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  footerLeft: { flexDirection: "row", gap: 25 },
  footerItem: { flexDirection: "row", alignItems: "center", gap: 3 },
});
