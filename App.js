import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Store from "./screens/store";
import Community from "./screens/community";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* Верхній заголовок */}
<View style={{marginTop:20,flex:1}}>

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
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "#12141C", height: 70 },
            tabBarIndicatorStyle: { backgroundColor: "#12141C", height: 2 },
            tabBarActiveTintColor: "#12141C",
            tabBarInactiveTintColor: "#12141C",
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Store") iconName = "shopping-bag";
              else if (route.name === "Community") iconName = "account-circle";
              else if (route.name === "Help") iconName = "about";
              else if (route.name === "Chat") iconName = "chat";
              else if (route.name === "Profile") iconName = "person";

              return (
                <Icon name={iconName} size={24} color={focused ? "white" : "gray"} />
              );
            },
          })}
        >
          <Tab.Screen
            name="Store"
            component={Store}
            options={{ headerShown: false }}
          />

          <Tab.Screen name="Community" component={Community} options={{ headerShown: false }}/>
          {/*<Tab.Screen name="Chat" component={Store} />*/}
          {/*<Tab.Screen name="Help" component={Store} />*/}
          {/*<Tab.Screen name="Profile" component={Store} />*/}
        </Tab.Navigator>
      </NavigationContainer>

</View>
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
