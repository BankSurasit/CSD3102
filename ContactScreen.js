import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

const ContactScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOutHome = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Profile'));
  };

  return (
    <LinearGradient colors={['#1F2833', '#0B0C10']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.welcomeText}>Contact Me</Text>

        {/* Profile Image with bounce effect */}
        <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
          <Image
            source={{
              uri: 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/142506786_827721707791778_8356013208309755451_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE1x5o2tSsxrQeceX24JsH0nu7IloiMftWe7siWiIx-1eD2_7FSb3fkpbz_C41oJN_TnRifzUDevsl5QRCH59sk&_nc_ohc=U4W5iy4yBdoQ7kNvgEuPc5T&_nc_oc=AdiximLXuHgHfxAEu5_EDifQQ4LnoHTb8GGsZ79yUv_r_Ypi9Uhf12URVHH3TZCdy7FQv8bAQakP_Pcw9EKLSMUm&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=AXSXrURsHZqpuDWv6tWSz0m&oh=00_AYDIUz5QhdiGgaDt06HFZ5U-t4X1gQND_kLCBj0dxpsS8g&oe=67D772A6',
            }}
            style={styles.profileImage}
          />
        </Animated.View>

        {/* Contact Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <FontAwesome5 name="envelope" size={28} color="#FFD700" />
            <Text style={styles.subText}>s65122250004@ssru.ac.th</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="phone" size={28} color="#32CD32" />
            <Text style={styles.subText}>0612848424</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="map-marker-alt" size={28} color="#FF6347" />
            <Text style={styles.subText}>
              61/1 Village No.2, Om Noi Subdistrict, Krathum Baen District, Samut Sakhon Province
            </Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="facebook" size={28} color="#1E90FF" />
            <Text style={styles.subText}>Bank Surasit</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity activeOpacity={0.8} onPressIn={handlePressIn} onPressOut={handlePressOutHome}>
          <LinearGradient colors={['#00BFFF','#1E90FF']} style={styles.button}>
            <FontAwesome5 name="user" size={30} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',  // Changed to white
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    justifyContent: 'flex-start',
    width: '100%',
  },
  subText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    flexShrink: 1,
    flexWrap: 'wrap',
    width: '80%',
    lineHeight: 22,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default ContactScreen;
