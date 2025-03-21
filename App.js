import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Store from "./screens/store";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* Верхній заголовок */}


      {/* Навігація */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "black",
              marginBottom: 15,
            },
            tabBarStyle: { backgroundColor: "#f2f2f2", height: 70 },
            tabBarIndicatorStyle: { backgroundColor: "blue", height: 2 },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Store") iconName = "home";
              else if (route.name === "Main") iconName = "home";
              else if (route.name === "Help") iconName = "about";
              else if (route.name === "Chat") iconName = "chat";
              else if (route.name === "Profile") iconName = "person";

              return (
                <Icon name={iconName} size={24} color={focused ? "blue" : "gray"} />
              );
            },
          })}
        >
          <Tab.Screen name="Store" component={Store} />
          {/*<Tab.Screen name="Main" component={Store} />*/}
          {/*<Tab.Screen name="Chat" component={Store} />*/}
          {/*<Tab.Screen name="Help" component={Store} />*/}
          {/*<Tab.Screen name="Profile" component={Store} />*/}
        </Tab.Navigator>
      </NavigationContainer>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c202c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
