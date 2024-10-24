import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import HamburgerIcon from '../assets/HamburgerIcon';
import {useNavigation} from '@react-navigation/native';
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
const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topbar}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <HamburgerIcon />
      </TouchableOpacity>

      <Text style={styles.text}>Fast Shop Tablet</Text>
      <Text style={styles.text}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    width: '100%',
    height: normalizeFontSize(28),
    backgroundColor: '#d6e7e2',
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, 
    shadowOffset: {
      width: 0, // x offset
      height: 0, // y offset
    },
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 4, // Blur radius
    shadowColor: '#000', // Color of the shadow
    elevation: 4, // Elevation for Android (simulates shadow)
    borderBottomColor:'#EFE8E8',
    borderBottomWidth:1
  },
  text: {
    color: '#000',
    fontSize: normalizeFontSize(10),
    fontWeight:'500'
  },
});

export default TopBar;
