import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (screen) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start(() => navigation.navigate(screen));
  };

  const handleEditButtonPress = () => {
    setIsEditing(!isEditing);
  };

  return (
    <LinearGradient colors={["#1F2833", "#0B0C10"]} style={styles.container}>
      <View style={styles.scrollContent}>
        {/* Profile Image */}
        <Image
          source={require("../assets/man.png")} // Replace with the path to your local image
          style={styles.profileImage}
        />

        <Text style={styles.sectionHeading}>Your Profile</Text>

        <View style={styles.card}>
          <TouchableOpacity
            onPress={handleEditButtonPress}
            style={styles.editButton}
          >
            <FontAwesome5
              name={isEditing ? "check" : "edit"}
              size={24}
              color="#1E90FF" // Blue color for the edit button
            />
          </TouchableOpacity>

          {[
            { label: "Name", value: userName, setter: setUserName },
            {
              label: "Age",
              value: userAge,
              setter: setUserAge,
              keyboardType: "numeric",
            },
            {
              label: "Weight (kg)",
              value: userWeight,
              setter: setUserWeight,
              keyboardType: "numeric",
            },
            {
              label: "Height (cm)",
              value: userHeight,
              setter: setUserHeight,
              keyboardType: "numeric",
            },
          ].map((item, index) => (
            <View style={styles.inputGroup} key={index}>
              <Text style={styles.label}>{item.label}</Text>
              <TextInput
                style={[
                  styles.inputField,
                  isEditing && styles.inputFieldEditable, // Show border only when editing
                  !isEditing && styles.inputFieldNoBorder, // No border when not editing
                ]}
                value={item.value}
                onChangeText={item.setter}
                editable={isEditing}
                keyboardType={item.keyboardType || "default"}
                placeholder={isEditing ? `Enter Your ${item.label}` : ""}
                placeholderTextColor="#B0B0B0"
                textAlign="left"
              />
            </View>
          ))}
        </View>
      </View>

      {/* Bottom Buttons */}
      {!isEditing && (
        <View style={styles.bottomButtonsContainer}>
          {[
            { name: "home", screen: "Home" },
            { name: "book-open", screen: "Lessons" },
            { name: "address-book", screen: "Contact" },
          ].map((btn, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPressIn={handlePressIn}
              onPressOut={() => handlePressOut(btn.screen)}
            >
              <LinearGradient
                colors={["#00C6FF", "#0072FF"]}
                style={styles.button}
              >
                <FontAwesome5 name={btn.name} size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  sectionHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF", // Changed to white
    marginBottom: 20,
    textAlign: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#2C3E50",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    elevation: 5,
    alignItems: "flex-start", // Align content to the left
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  inputGroup: {
    width: "100%", // Ensure it takes full width
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // Changed to white
    marginBottom: 5,
  },
  inputField: {
    fontSize: 16,
    color: "#ddd",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "100%", // Full width for input fields
    borderRadius: 5, // Keep rounded corners
  },
  inputFieldEditable: {
    borderWidth: 1,
    borderColor: "#1E90FF", // Set blue border color when editing
  },
  inputFieldNoBorder: {
    borderWidth: 0, // No border when not editing
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
