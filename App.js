import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Store from "./screens/store";
import Community from "./screens/community";
import Chat from "./screens/chat";
import Safety from "./screens/safety";
import Profile from "./screens/profile";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // Додаємо тему
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme(); // Отримуємо тему
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#1C202C" : "#F5F5F5" }]}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: isDark ? "white" : "black",
              marginBottom: 15,
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: isDark ? "#12141C" : "#FFFFFF",
              height: 70,
            },
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Store") iconName = "shopping-bag";
              else if (route.name === "Community") iconName = "account-circle";
              else if (route.name === "Safety") iconName = "security";
              else if (route.name === "Chat") iconName = "chat";
              else if (route.name === "Profile") {
                return (
                  <Image
                    source={require("./assets/Group 4.png")} // Шлях до вашого зображення
                    style={{
                      width: 24,
                      height: 24,

                    }}
                  />
                );
              }

              return (
                <Icon name={iconName} size={24} color={focused ? (isDark ? "white" : "black") : "gray"} />
              );
            },
          })}
        >
          <Tab.Screen name="Store" component={Store} options={{ headerShown: false }} />
          <Tab.Screen name="Community" component={Community} options={{ headerShown: false }} />
          <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
          <Tab.Screen name="Safety" component={Safety} options={{ headerShown: false }} />
          <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
