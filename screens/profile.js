import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";



export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", gap:5}}>
          <Image style={{width:98,height:98}} source={require("../assets/Group 4.png")}></Image>
          <Text style={styles.txtprofile}>Firstname Lastname</Text>
          <Text style={styles.txtprofile}>Group</Text>

        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.firstButton]}>
            <Text style={styles.btnText}>Settings</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.lastButton]}>
            <Text style={styles.btnText}>LogOut</Text>
            <Image source={require("../assets/Path.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
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
  buttons: {
    marginTop: 20,
  },
  button: {
      color: "white",
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
  txtprofile:{
      color: "white",
      fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
    letterSpacing: -0.18,
  }
})
