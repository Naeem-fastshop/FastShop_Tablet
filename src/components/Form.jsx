import { View, Text, StyleSheet, TextInput,Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { fastshop } from '../utils/Color';
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
const Form = () => {
  return (
    
    <View style={styles.orderTable}>

   
      <View style={{width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row',backgroundColor:'#cad9c9',padding:normalizeFontSize(3),gap:normalizeFontSize(3)}}>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Type</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Table No</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      </View>

      <View style={{width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row',backgroundColor:'#cad9c9',padding:normalizeFontSize(3),gap:normalizeFontSize(3)}}>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Quantity</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Cover</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      </View>

      <View style={{width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row',backgroundColor:'#cad9c9',padding:normalizeFontSize(3),gap:normalizeFontSize(3)}}>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Food Bill</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      <View style={{width:'50%'}}>
        <Text style={{color:'#000',fontSize:10,paddingVertical:2}}>Time</Text>
        <TextInput value='' style={styles.input}/>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderTable: {
    flex: 1, // Take up equal space with other components
    // backgroundColor: 'skyblue',
    width: '100%',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    gap:normalizeFontSize(6)
  },
  input:{
    backgroundColor:'#f1f1f1',
    borderRadius:normalizeFontSize(3),
    borderColor:fastshop,
    borderWidth:normalizeFontSize(1),
    height:normalizeChartSize(25),
    color:'#000',

    

  }
});

export default Form;
