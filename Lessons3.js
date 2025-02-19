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
import { LinearGradient } from 'expo-linear-gradient';

const Lessons3 = ({ navigation }) => {
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>กลยุทธ์การเล่น</Text>

        <Text style={styles.content}>1. แผน 4-4-2 (Classic Formation) เน้นการควบคุมกลางสนามและการทำประตูจากการโจมตีที่รวดเร็ว ผ่านปีกและการทำชิ่งกับกองหน้า</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/442-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>2. แผน 4-3-3 เน้นการบุกที่มีความหลากหลาย และใช้ปีกในการสร้างโอกาส ทำให้ทีมสามารถกดดันคู่ต่อสู้ได้ตลอดเวลา</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/433-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>3. แผน 3-5-2 เน้นการครองบอลและควบคุมกลางสนาม โดยมีปีกทั้งสองข้างคอยสนับสนุนการโจมตีและป้องกัน</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/352-1-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>4. แผน 5-3-2 เน้นการป้องกันที่มั่นคงด้วยกองหลัง 5 คน และรอจังหวะในการโต้กลับด้วยการใช้กองหน้า 2 คน</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/532-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>5. แผน 4-2-3-1 สร้างสมดุลระหว่างการป้องกันและการโจมตี มีการครองบอลที่ดีและสามารถบุกได้หลากหลายแนวทาง</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/4231-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>6. แผน 4-5-1 เน้นการควบคุมเกมในแดนกลางด้วยกองกลาง 5 คน สนับสนุนการโจมตีจากข้างๆ และรักษาความสมดุลในการป้องกัน โดยกองหน้าทำหน้าที่ทำประตูในขณะที่ทีมตั้งรับหรือโต้กลับ</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/451-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>7. แผน 5-4-1 เน้นการป้องกันแน่นหนาด้วยกองหลัง 5 คนและกองกลาง 4 คนที่ช่วยทั้งรับและโจมตี โดยกองหน้าคนเดียวจะรับหน้าที่ทำประตูจากการโต้กลับ</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/541-jpg.webp" }} style={styles.image} />

        <Text style={styles.content}>8. แผน 3-4-3 บุกหนักผ่านปีกและใช้กองหน้าหลายคนในการกดดันแนวรับของคู่แข่ง พร้อมการควบคุมบอลในกลางสนาม</Text>
        <Image source={{ uri: "https://jobsinfootball.mysmartjobboard.com/files/userfiles/3-4-3_chelsea_conte.jpg" }} style={styles.image} />

        <Text style={styles.content}>9. แผน 4-3-2-1 (W-M Formation) เน้นการสร้างเกมจากกลางสนาม โดยมีตัวรุกช่วยในการสร้างโอกาสให้กับกองหน้า มีการป้องกันที่ดีจากแผน W ที่จัดตำแหน่งให้ครอบคลุม</Text>
        <Image source={{ uri: "https://thepfsa.co.uk/wp-content/uploads/2023/07/4321-jpg.webp" }} style={styles.image} />

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
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 80, // Added padding to make space for the button
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
});

export default Lessons3;
