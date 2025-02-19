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

const Lesson5 = ({ navigation }) => {
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
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>นักเตะไอคอน</Text>

        {/* Example for the first player */}
        <Text style={styles.content}>
          1. เปเล่ (Pelé) ตำนานลูกหนังบราซิล เจ้าของแชมป์โลก 3 สมัย และผู้ทำประตูเกิน 1,000 ลูก
        </Text>
        <Image
          source={{ uri: "https://img.vavel.com/pele-1670369741960.webp" }}
          style={styles.image}
        />

        {/* Additional player entries */}
        <Text style={styles.content}>
          2. ดิเอโก้ มาราโดนา (Diego Maradona) อัจฉริยะลูกหนังอาร์เจนตินา เจ้าของ "หัตถ์พระเจ้า" และแชมป์โลก 1986
        </Text>
        <Image
          source={{ uri: "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/03/maradona86.jpg?fit=1600%2C1053&ssl=1" }}
          style={styles.image}
        />
         {/** ✅ Johan Cruyff */}
      <Text style={styles.content}>
        3. โยฮัน ครัฟฟ์ (Johan Cruyff) ตำนานลูกหนังเนเธอร์แลนด์ ผู้ปฏิวัติวงการด้วย "โททัลฟุตบอล" และเจ้าของ 3 บัลลงดอร์
      </Text>
      <Image
        source={{ uri: "https://cdn.artphotolimited.com/images/5f60bc53bd40b8173f11e855/1000x1000/johan-cruyff-playing-for-barcelona-in-1978.jpg" }}
        style={styles.image}
      />

      {/** ✅ Lionel Messi */}
      <Text style={styles.content}>
        4. ลีโอเนล เมสซี่ (Messi) ตำนานลูกหนังอาร์เจนตินา เจ้าของแชมป์โลก 2022                และบัลลงดอร์ 8 สมัย
      </Text>
      <Image
        source={{ uri: "https://people.com/thmb/QWcSAOagO7dDRnUAHCaGXVsuoDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Ballon-dOr-1-62a4faf00c084edc84eb48da21bd759b.jpg" }}
        style={styles.image}
      />

      {/** ✅ Cristiano Ronaldo */}
      <Text style={styles.content}>
        5. โรนัลโด้ CR7 (Cristiano Ronaldo) ยอดดาวยิงโปรตุเกส เจ้าของบัลลงดอร์ 5 สมัย และแชมป์ยูโร 2016
      </Text>
      <Image
        source={{ uri: "https://i.insider.com/611b83d2a4b07b0018ade4c0?width=700" }}
        style={styles.image}
      />

      {/** ✅ Zinedine Zidane */}
      <Text style={styles.content}>
        6. ซีเนอดีน ซีดาน (Zinedine Zidane)                เพลย์เมกเกอร์ระดับตำนาน พาฝรั่งเศสคว้าแชมป์โลก 1998 และยูโร 2000
      </Text>
      <Image
        source={{ uri: "https://historyofsoccer.info/wp-content/uploads/2022/08/did-zidane-won-world-cup.webp" }}
        style={styles.image}
      />

      {/** ✅ Ronaldo Nazário */}
      <Text style={styles.content}>
        7. โรนัลโด้ นาซาริโอ (Ronaldo Nazário) ศูนย์หน้าพันธุ์ดุ เจ้าของ 2 แชมป์โลกและบัลลงดอร์ 2 สมัย
      </Text>
      <Image
        source={{ uri: "https://pbs.twimg.com/media/F6nLbx8XEAEBDHi.jpg" }}
        style={styles.image}
      />

      {/** ✅ Franz Beckenbauer */}
      <Text style={styles.content}>
       8. ฟรานซ์ เบ็คเคนบาวเออร์ (Franz Beckenbauer) ตำนานกองหลังเยอรมนี ผู้ปฏิวัติตำแหน่งลิเบอโร่ คว้าแชมป์โลกทั้งนักเตะและโค้ช
      </Text>
      <Image
        source={{ uri: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F2c79b309-7266-418c-bca4-0a81cc15eddd.jpg?crop=2214%2C1245%2C64%2C0&resize=1200" }}
        style={styles.image}
      />

      {/** ✅ Ronaldinho */}
      <Text style={styles.content}>
        9. โรนัลดินโญ่ (Ronaldinho) พ่อมดลูกหนังบราซิล เจ้าของลีลาแพรวพราวและแชมป์โลก 2002
      </Text>
      <Image
        source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidTRPHWa_FTXIUu_ZaNlUIrbtkbI6TutRRbodjWdSFTweLR6mLHaCrP-gz-HZPqmkQ7IsG-VgQnJDdDXiw6XVsMzYoW_4F0aP3EF0qywCZQ92X8ALO_7bDGZNjHeyVvK9rKd87loKz8h8uGcSTCDmQ-tbw2R6cUB6XiTYzV4hBhLJf_7xbdCCAHNEaaLY/s1600/0505_Ronaldinho_2006_GettyImages-57494291.webp" }}
        style={styles.image}
      />

      {/** ✅ Paolo Maldini */}
      <Text style={styles.content}>
        10. เปาโล มัลดินี (Paolo Maldini) ตำนานกองหลังอิตาลี เจ้าของการเล่นในระดับสูงกว่า 25 ปี และแชมป์แชมเปียนส์ลีก 5 สมัย
      </Text>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/42/8a/fc/428afc3624826937515fb9e818c8cae4.jpg" }}
        style={styles.image}
      />

      {/** ✅ Alfredo Di Stéfano */}
      <Text style={styles.content}>
        11. อัลเฟรโด้ ดิ สเตฟาโน (Alfredo Di Stéfano) ตำนานลูกหนังอาร์เจนตินา-สเปน ผู้ยิ่งใหญ่ในยุค 1950s กับเรอัล มาดริด และแชมป์ยุโรป 5 สมัย
      </Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Di_stefano_argentina_%28cropped%29.jpg" }}
        style={styles.image}
      />
      
      {/** ✅ Michel Platini */}
      <Text style={styles.content}>
        12. มิเชล พลาตินี (Michel Platini) เพลย์เมกเกอร์ระดับตำนานฝรั่งเศส เจ้าของแชมป์ยูโร 1984 และบัลลงดอร์ 3 สมัย
      </Text>
      <Image
        source={{ uri: "https://footballmakeshistory.eu/wp-content/uploads/2022/12/Michel_Platini-585x775.jpg" }}
        style={styles.image}
      />

      {/** ✅ George Best */}
      <Text style={styles.content}>
        13. จอร์จ เบสต์ (George Best) อัจฉริยะลูกหนังไอร์แลนด์เหนือ นักเตะสุดยอดของแมนเชสเตอร์ ยูไนเต็ด และเจ้าของบัลลงดอร์ 1968
      </Text>
      <Image
        source={{ uri: "https://pbs.twimg.com/media/GOK1C6wXQAArar-.jpg"}}
        style={styles.image}
      />
      
      {/** ✅ Eusébio */}
      <Text style={styles.content}>
        14. ยูเซบิโอ้ (Eusébio) เครื่องจักรทำประตู นำโปรตุเกสคว้าที่ 3 ฟุตบอลโลก 1966
      </Text>
      <Image
        source={{ uri: "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/13438802/" }}
        style={styles.image}
      />

       {/** ✅ Alfredo Di Stéfano */}
       <Text style={styles.content}>
        15. ดิดิเย่ร์ ดรอกบา (Didier Drogba) ตำนานกองหน้าทีมชาติไอวอรีโคสต์ของเชลซี ผู้ยิงประตูสำคัญในรอบชิงชนะเลิศแชมเปียนส์ลีก 2012 และคว้าแชมป์พรีเมียร์ลีกหลายสมัย
      </Text>
      <Image
        source={{ uri: "https://m.media-amazon.com/images/M/MV5BMjU3YThlODYtMzVmYy00NDZjLWIxMjMtZDQzODg2ZjMzMjFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" }}
        style={styles.image}
      />
      
      {/** ✅ Ruud Gullit */}
      <Text style={styles.content}>
        16. รูด กุลลิท (Ruud Gullit) ตำนานฟุตบอลฮอลแลนด์ เพลย์เมกเกอร์ที่มีทักษะโดดเด่นและเป็นแชมป์ยูโร 1988
      </Text>
      <Image
        source={{ uri: "https://blog.uksoccershop.com/wp-content/uploads/2024/11/gullit4.jpg" }}
        style={styles.image}
      />

      {/** ✅ Marco van Basten */}
      <Text style={styles.content}>
        17. มาร์โก แวน บาสเทน (Marco van Basten) ตำนานกองหน้าชาวเนเธอร์แลนด์ เจ้าของประตูสุดยอดในรอบชิงยูโร 1988 และบัลลงดอร์ 3 สมัย
      </Text>
      <Image
        source={{ uri: "https://tmssl.akamaized.net/images/foto/galerie/marco-van-basten-ac-mailand-milan-1989-1603980094-50209.jpg" }}
        style={styles.image}
      />

       {/** ✅ Roberto Baggio */}
       <Text style={styles.content}>
        18. ริคาโด้ กาก้า (Kaká) ตำนานกองกลางบราซิล เจ้าของบัลลงดอร์ 2007 และแชมป์โลก 2002
      </Text>
      <Image
        source={{ uri: "https://images.mykhel.com/img/2017/11/kaka-ac-milan-24-1511513149.jpg" }}
        style={styles.image}
      />
      
      {/** ✅ Lev Yashin */}
      <Text style={styles.content}>
        19. เลฟ ยาชิน (Lev Yashin) ตำนานผู้รักษาประตูรัสเซีย เจ้าของบัลลงดอร์ 1963 และได้รับฉายา "แมงมุมดำ" สำหรับทักษะการเซฟที่ยอดเยี่ยม
      </Text>
      <Image
        source={{ uri: "https://pbs.twimg.com/media/E3d5IpaX0AIV4Dr.jpg" }}
        style={styles.image}
      />

      {/** ✅ Thierry Henry */}
      <Text style={styles.content}>
        20. Thierry Henry ตำนานกองหน้าฝรั่งเศส เจ้าของแชมป์โลก 1998 และยูโร 2000 พร้อมสถิตินักเตะทำประตูสูงสุดของอาร์เซนอล
      </Text>
      <Image
        source={{ uri: "https://cdn.vox-cdn.com/thumbor/oFZQEXcVDI8qE5CWt0PnAQgzt7s=/0x0:2562x1590/1200x800/filters:focal(1077x591:1485x999)/cdn.vox-cdn.com/uploads/chorus_image/image/66687099/1214932935.jpg.0.jpg" }}
        style={styles.image}
      />

        {/* More player entries here... */}

      </ScrollView>

      {/* Animated Back Button */}
      <Animated.View style={[styles.backButtonContainer, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
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
  scrollContainer: {
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
    paddingBottom: 80, // Ensure space for back button
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
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#1E90FF", // ปล่อยให้มีสีเหลืองที่ปุ่มเอง
    paddingVertical: 20, // ลดความสูงของปุ่ม
    paddingHorizontal: 50, // ลดความกว้างของปุ่ม
    borderRadius: 25, // ปรับขนาดของมุมให้เล็กลง
    elevation: 8, // เพิ่มเงาให้ปุ่มดูโดดเด่นขึ้น (Android)
  },
  backText: {
    fontSize: 14, // ลดขนาดตัวอักษรให้เล็กลง
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8, // ลดระยะห่างจากไอคอน
  },
});

export default Lesson5;
