// src/screens/SplashScreen.js

import React, { useEffect,useRef } from 'react';
import { Animated,View, Text, Image, StyleSheet, ActivityIndicator,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
const baseWidth = 375; // Base width for standard scaling (iPhone 6/7/8)
const baseHeight = 667; // Base height for standard scaling (iPhone 6/7/8)
const scaleWidth = deviceWidth / baseWidth;
const scaleHeight = deviceHeight / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight); // Use the smaller scale for better proportionality

const normalizeFontSize = size => {
  if (deviceWidth >= 768) {
    // Consider 768 as a breakpoint for tablets
    return Math.round(size * scale * 1); // Decrease size slightly for larger screens
  } else {
    return Math.round(size * scale); // Normal scaling for phones
  }
};

// Utility function to calculate chart size based on device dimensions
const normalizeChartSize = size => {
  if(deviceWidth >= 768){
  return Math.round(size * scale * 1);
  }else{
    return Math.round(size * scale);
  }
};
const SplashScreen = () => {
  const navigation = useNavigation();
  const logoAnimation = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   handleBackPress
    // );

    Animated.timing(logoAnimation, {
      toValue: 1, // Fully opaque
      duration: 2000, // 2000ms
      useNativeDriver: true, // Add this line
    }).start(() => {
      const retrieveUserData = async () => {
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        if (username && password) {
          console.log("dashboard py chala")
          navigation.reset({ // Reset the navigation stack
            index: 0,
            routes: [{ name: 'Drawer' }],
          });
        } else {
          console.log("login py chala gya")
          navigation.reset({ // Reset the navigation stack
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      };
      
      retrieveUserData();
    });

    // return () => backHandler.remove(); 
  }, [navigation, logoAnimation]);

  return (
    <View style={styles.container}>
     
      <Animated.Image
        source={require('../assets/logo.png')} 
        style={[styles.logo, { opacity: logoAnimation }]} 
      />
      {/* <ActivityIndicator size="large" color="#0000ff" style={styles.loading} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  logo: {
    width: normalizeChartSize(150),
    height: normalizeChartSize(150),
    marginBottom: normalizeFontSize(20),
  },
  loading: {
    marginTop: 20,
  },
});

export default SplashScreen;
