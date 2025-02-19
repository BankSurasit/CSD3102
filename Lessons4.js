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

const Lessons4 = ({ navigation }) => {
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
        <Text style={styles.text}>การเล่นในเเต่ละตำแหน่ง</Text>

        <Text style={styles.content}>1. GK (Goalkeeper) ผู้รักษาประตูที่มีหน้าที่ป้องกันไม่ให้ฝ่ายตรงข้ามทำประตู โดยการเซฟลูกบอลและควบคุมเกมในเขตโทษ</Text>
        <Image source={{ uri: "https://statsbomb.com/wp-content/uploads/2022/02/PA-13461384_DDG_Save.jpeg" }} style={styles.image} />

        <Text style={styles.content}>2. CB (Center Back) กองหลังที่มีหน้าที่ป้องกันการโจมตีจากคู่ต่อสู้ โดยการเข้าสกัด, จัดตำแหน่งในแนวรับ, และช่วยในการขึ้นบุกเมื่อมีโอกาส</Text>
        <Image source={{ uri: "https://d3rqy6w6tyyf68.cloudfront.net/AcuCustom/Sitename/DAM/112/duncan-silva-standard.jpg" }} style={styles.image} />

        <Text style={styles.content}>3. LB/RB (Full Back) กองหลังที่เล่นทางข้างสนาม มีหน้าที่ป้องกันการโจมตีจากริมเส้นและช่วยเกมรุกด้วยการเปิดบอลหรือเติมเกมขึ้นหน้า</Text>
        <Image source={{ uri: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/04/GettyImages-51436988-2-scaled.jpg" }} style={styles.image} />

        <Text style={styles.content}>4. DM (Defensive Midfielder) กองกลางที่เน้นการป้องกัน ช่วยตัดเกมรุกของคู่ต่อสู้, ทำลายการโจมตี และเชื่อมเกมระหว่างกองหลังและกองกลาง</Text>
        <Image source={{ uri: "https://i.dailymail.co.uk/1s/2019/10/10/14/19541330-7558879-image-a-62_1570714827403.jpg" }} style={styles.image} />

        <Text style={styles.content}>5. CM (Central Midfielder) กองกลางที่มีหน้าที่ควบคุมเกมทั้งในและนอกบอล, จ่ายบอล, สนับสนุนเกมรุกและรับบอลจากกองหลังเพื่อสร้างโอกาส</Text>
        <Image source={{ uri: "https://cdn.vox-cdn.com/thumbor/ZhcPvcVBT5VnqhNsAq5tgu_r6bY=/0x0:2963x1975/1200x0/filters:focal(0x0:2963x1975):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24422770/1462287389.jpg" }} style={styles.image} />

        <Text style={styles.content}>6. AM (Attacking Midfielder) กองกลางที่เน้นการโจมตี โดยการสร้างโอกาสทำประตู, จ่ายบอลสร้างสรรค์, และยิงประตูจากระยะไกล</Text>
        <Image source={{ uri: "https://media.cnn.com/api/v1/images/stellar/prod/231028233253-01-jude-bellingham-1028.jpg?q=w_1110,c_fill" }} style={styles.image} />

        <Text style={styles.content}>7. LW/RW (Winger) ปีกที่เล่นทางข้างสนาม, มีหน้าที่เลี้ยงบอลผ่านคู่ต่อสู้, เปิดบอลให้กองหน้า, และยิงประตูจากมุมแคบ</Text>
        <Image source={{ uri: "https://i.dailymail.co.uk/i/pix/2016/02/16/03/3133AD8400000578-0-image-a-46_1455594512022.jpg" }} style={styles.image} />

        <Text style={styles.content}>8. CF (Center Forward) กองหน้าที่เล่นตรงกลางในแนวรุก, มีหน้าที่หาช่องทำประตู, รับบอลจากกองกลาง, และจบสกอร์ในเขตโทษ</Text>
        <Image source={{ uri: "https://c.ndtvimg.com/2022-04/mpj4r8ao_-karim-benzema-_625x300_07_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" }} style={styles.image} />

        <Text style={styles.content}>9. ST (Striker) กองหน้าที่เน้นการทำประตูโดยเฉพาะ, เล่นในตำแหน่งที่ใกล้กับประตูคู่ต่อสู้, เน้นการยิงประตูและการจบสกอร์</Text>
        <Image source={{ uri: "https://i.dailymail.co.uk/i/pix/2014/12/10/1418245476831_lc_galleryImage_Barcelona_s_Uruguayan_for.JPG" }} style={styles.image} />

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
    backgroundColor: "#1E90FF", // ปล่อยให้มีสีเหลืองที่ปุ่มเอง
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

export default Lessons4;
