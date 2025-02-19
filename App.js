import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// 🔹 Import screens here
import HomeScreen from "./Project/Screen/HomeScreen";
import ProfileScreen from "./Project/Screen/ProfileScreen";
import ContactScreen from "./Project/Screen/ContactScreen";
import LessonsDashboard from "./Project/Lessons/LessonsDashboard";
import Lesson1 from "./Project/Lessons/Lessons1";
import Lesson2 from "./Project/Lessons/Lessons2";
import Lesson3 from "./Project/Lessons/Lessons3";
import Lesson4 from "./Project/Lessons/Lessons4";
import Lesson5 from "./Project/Lessons/Lessons5";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Profile Screen */}
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }} 
        />

        {/* Contact Screen */}
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Lessons Dashboard */}
        <Stack.Screen 
          name="Lessons" 
          component={LessonsDashboard} 
          options={{ headerShown: false }} 
        />
        
        {/* Individual Lesson Screens */}
        <Stack.Screen 
          name="Lesson1" 
          component={Lesson1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Lesson2" 
          component={Lesson2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Lesson3" 
          component={Lesson3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Lesson4" 
          component={Lesson4} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Lesson5" 
          component={Lesson5} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// 🔹 Styles (Optional)
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F4F4F",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 20 },
  input: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#1E8449",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 18 },
  linkText: { color: "lightgray", marginTop: 10 },
});
