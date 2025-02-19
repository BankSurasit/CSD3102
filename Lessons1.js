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
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Lessons1 = ({ navigation }) => {
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
        <Text style={styles.text}>กติกาฟุตบอล</Text>

        <Text style={styles.content}>1. ขนาดสนาม – ต้องเป็นรูปสี่เหลี่ยมผืนผ้า ยาว 90-120 เมตร กว้าง 45-90 เมตร</Text>
        <Image source={{ uri: "https://www.bovigastore.com/cdn/shop/articles/No1_Football-Field_68x105m_BOX-BRIGHT_BovigaStore_20190326_1200x.jpg?v=1553597971" }} style={styles.image} />

        <Text style={styles.content}>2. ลูกฟุตบอล – ต้องเป็นทรงกลม มีเส้นรอบวง 68-70 ซม. และน้ำหนัก 410-450 กรัม</Text>
        <Image source={{ uri: "https://www.salika.co/wp-content/uploads/2018/05/qmkit5gpe6tvsubbecrw.jpg" }} style={styles.image} />

        <Text style={styles.content}>3. จำนวนผู้เล่น – ทีมละ 11 คน (รวมผู้รักษาประตู) เปลี่ยนตัวได้สูงสุด 5 คน (ขึ้นอยู่กับรายการแข่งขัน)</Text>
        <Image source={{ uri: "https://poakpong.com/sites/default/files/2019/09/20190902-football-player-number.png" }} style={styles.image} />

        <Text style={styles.content}>4. อุปกรณ์ของผู้เล่น – ใส่เสื้อ, กางเกง, สนับแข้ง, ถุงเท้า, รองเท้าสตั๊ด ห้ามใส่เครื่องประดับ</Text>
        <Image source={{ uri: "https://media.istockphoto.com/id/497752004/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5.jpg?s=1024x1024&w=is&k=20&c=s_2ILq09KsSV4i41B9_NGM2sWiEZ4oF90wQCDJ0eytk=" }} style={styles.image} />

        <Text style={styles.content}>5. ผู้ตัดสิน – มีอำนาจสูงสุดในการตัดสินเกม ดูแลให้การแข่งขันเป็นไปตามกติกา</Text>
        <Image source={{ uri: "https://www.dailynews.co.th/wp-content/uploads/2024/04/GettyImages-2146772989.jpg" }} style={styles.image} />

        <Text style={styles.content}>6. ผู้ช่วยผู้ตัดสิน – มี 2 คน คอยช่วยตัดสินลูกออก ข้อผิดพลาด และล้ำหน้า</Text>
        <Image source={{ uri: "https://superlive.id/storage/articles/9d984a9d-f7b1-4bc2-81d2-8d2b5b3ef9b1.jpg" }} style={styles.image} />

        <Text style={styles.content}>7. ระยะเวลาการแข่งขัน – แข่ง 2 ครึ่ง ครึ่งละ 45 นาที พักครึ่ง 15 นาที (ทดเวลาตามดุลยพินิจผู้ตัดสิน)</Text>
        <Image source={{ uri: "https://www.khaosod.co.th/wpapp/uploads/2021/07/000_1N975R-1.jpg" }} style={styles.image} />

        <Text style={styles.content}>8. การเริ่มและเริ่มใหม่ – ใช้การเขี่ยบอลกลางสนามเมื่อเริ่มเกม, ครึ่งหลัง, หรือหลังจากมีการทำประตู</Text>
        <Image source={{ uri: "https://topicstock.pantip.com/supachalasai/topicstock/2012/03/S11812057/S11812057-34.jpg" }} style={styles.image} />

        <Text style={styles.content}>9. บอลอยู่นอกการเล่น – เมื่อบอลออกข้ามเส้นข้างหรือเส้นประตูทั้งลูก</Text>
        <Image source={{ uri: "https://today-obs.line-scdn.net/0hyUtyj80HJnpJADOUlGZZLXFWKgt6Zjxza25rH2lUfk9iLDUufTZ1GWoBelZsNjYpaTQ-GWRTeUk3MWEqIQ/w644" }} style={styles.image} />

        <Text style={styles.content}>10. วิธีนับคะแนน – ยิงเข้าประตูฝ่ายตรงข้ามได้ 1 ประตู ทีมที่ทำประตูได้มากกว่าจะเป็นผู้ชนะ</Text>
        <Image source={{ uri: "https://www.lbhf.gov.uk/sites/default/files/styles/original/public/2024-05/GettyImages-2151603973.jpg?itok=f7XvmGWW" }} style={styles.image} />

        <Text style={styles.content}>11. ล้ำหน้า – ผู้เล่นอยู่ตำแหน่งล้ำหน้าหากอยู่ใกล้เส้นประตูฝ่ายตรงข้ามกว่าบอลและผู้เล่นฝ่ายตรงข้ามคนสุดท้ายขณะได้รับบอล</Text>
        <Image source={{ uri: "https://d3dyak49qszsk5.cloudfront.net/VAR_0cc4b61185.jpg" }} style={styles.image} />

        <Text style={styles.content}>12. ฟาวล์และประพฤติผิด – ห้ามดึงเสื้อ, เตะ, ผลัก, ใช้แขน หรือเล่นอันตราย ฝ่าฝืนอาจโดนใบเหลืองหรือใบแดง</Text>
        <Image source={{ uri: "https://f.ptcdn.info/592/063/000/pqbu4knvgN91pHhvWOF-o.jpg" }} style={styles.image} />

        <Text style={styles.content}>13. ลูกตั้งเตะฟรีคิก – มีทั้ง ฟรีคิกโดยตรง (ยิงตรงเข้าประตูได้) และ ฟรีคิกโดยอ้อม (ต้องให้เพื่อนเล่นก่อน)</Text>
        <Image source={{ uri: "https://mpics.mgronline.com/pics/Images/561000002288601.JPEG" }} style={styles.image} />

        <Text style={styles.content}>14. จุดโทษ – หากมีการทำฟาวล์ในเขตโทษ ฝ่ายตรงข้ามได้ยิงจุดโทษ 1 ครั้งจากระยะ 12 หลา</Text>
        <Image source={{ uri: "https://s.isanook.com/sp/0/ud/164/821843/ppp2.jpg?ip/resize/w728/q80/jpg" }} style={styles.image} />

        <Text style={styles.content}>15. ทุ่มบอล – เมื่อลูกออกข้าง ผู้เล่นฝ่ายตรงข้ามจะเป็นผู้ทุ่มบอลเข้ามา</Text>
        <Image source={{ uri: "https://gotmaekob.wordpress.com/wp-content/uploads/2010/12/20101213939_02.jpg" }} style={styles.image} />

        <Text style={styles.content}>16. เตะจากประตู – เมื่อลูกออกหลังจากฝ่ายรุก เป็นการเริ่มเล่นใหม่โดยผู้รักษาประตูเตะออกจากเขตโทษ</Text>
        <Image source={{ uri: "https://sittinon30488.wordpress.com/wp-content/uploads/2014/09/valenciacfvchelseafcuefachampionsleague51s4qifehdcl.jpg" }} style={styles.image} />

        <Text style={styles.content}>17. เตะมุม – เมื่อลูกออกหลังจากฝ่ายรับ เป็นการเตะมุมโดยฝ่ายรุกจากมุมสนาม</Text>
        <Image source={{ uri: "https://f.ptcdn.info/096/019/000/1400414248-5571244405-o.jpg" }} style={styles.image} />
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

export default Lessons1;
