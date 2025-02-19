import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { lessons } from "./LessonsData"; // Ensure this imports the lessons data correctly
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const LessonsDashboard = ({ navigation }) => {
  return (
    <LinearGradient colors={["#1F2833", "#0B0C10"]} style={styles.container}>
      <Text style={styles.header}>เริ่มเรียนรู้เลย</Text>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.lessonItem}
            onPress={() =>
              navigation.navigate(`Lesson${item.id}`, { lessonId: item.id })
            }
          >
            <LinearGradient
              colors={["#3A506B", "#1C2541"]}
              style={styles.lessonCard}
            >
              <Text style={styles.lessonText}>{item.title}</Text>
              <Image source={{ uri: item.image }} style={styles.lessonImage} />
              <FontAwesome5
                name={item.icon}
                size={24}
                color="#fff"
                style={styles.icon}
              />
            </LinearGradient>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <LinearGradient colors={["#00BFFF", "#1E90FF"]} style={styles.button}>
          <FontAwesome5 name="user" size={30} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32, // เพิ่มขนาดฟอนต์ให้ใหญ่ขึ้น
    fontWeight: "bold",
    color: "#fff", // ใช้สี
    textAlign: "center", // จัดกลาง
    marginBottom: 20,
    marginTop: 40,
    textShadowColor: "#000", // เพิ่มเงาให้กับข้อความ
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  lessonItem: {
    marginBottom: 15,
  },
  lessonCard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    width: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  lessonImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  icon: {
    marginTop: 10,
  },

  lessonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },

  profileButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
});

export default LessonsDashboard;
