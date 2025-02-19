import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Don't forget to import LinearGradient

const Lessons2 = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
  };

  return (
    <LinearGradient
      colors={['#1F2833', '#0B0C10']} // Gradient colors
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>เทคนิคพื้นฐานฟุตบอล</Text>

        <Text style={styles.content}>1. การเลี้ยงบอล (Dribbling) – ทักษะควบคุมลูกบอลด้วยเท้าเพื่อเคลื่อนที่ไปข้างหน้า หลบคู่แข่ง และสร้างโอกาสทำเกม </Text>
        <Image source={{ uri: "https://f.ptcdn.info/354/024/000/1412999251-Messi-o.jpg" }} style={styles.image} />

        <Text style={styles.content}>2. การส่งบอล (Passing) – ทักษะส่งลูกฟุตบอลไปยังเพื่อนร่วมทีมอย่างแม่นยำเพื่อสร้างเกมรุกหรือรักษาการครองบอล</Text>
        <Image source={{ uri: "https://i.ytimg.com/vi/2gdD2pjGxhU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCBvkde8J9CVkCOqV2BKNT-MCdwrw" }} style={styles.image} />

        <Text style={styles.content}>3. การยิงประตู (Shooting) – ทักษะการเตะบอลเพื่อทำประตูโดยใช้ความแรง ความแม่นยำ และเทคนิคที่เหมาะสม</Text>
        <Image source={{ uri: "https://www.matichon.co.th/wp-content/uploads/2017/05/000_O20QD.jpg" }} style={styles.image} />

        <Text style={styles.content}>4. การจับบอลและควบคุมบอล (Ball Control) – ทักษะรับและควบคุมบอลเพื่อเตรียมเล่นต่ออย่างแม่นยำและมีประสิทธิภาพ</Text>
        <Image source={{ uri: "https://i.ytimg.com/vi/qtuObwcolDo/maxresdefault.jpg" }} style={styles.image} />

        <Text style={styles.content}>5. การโหม่งบอล (Heading) – ทักษะใช้ศีรษะสัมผัสบอลเพื่อส่งต่อ ทำประตู หรือสกัดบอลออกจากพื้นที่อันตราย</Text>
        <Image source={{ uri: "https://mpics.mgronline.com/pics/Images/564000002921201.JPEG" }} style={styles.image} />

        <Text style={styles.content}>6. การป้องกัน (Defending) – ทักษะหยุดเกมรุกของคู่แข่งด้วยการประกบ แย่งบอล และสกัดบอลอย่างมีประสิทธิภาพ</Text>
        <Image source={{ uri: "https://mpics.mgronline.com/pics/Images/566000003210701.JPEG" }} style={styles.image} />
      </ScrollView>

      <Animated.View style={[styles.backButtonContainer, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity style={styles.backButton} onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
          <Text style={styles.backText}>กลับสู่หน้าบทเรียน</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 50,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#1E90FF",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 8,
  },
  backText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E90FF",
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: "90%",
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default Lessons2;
