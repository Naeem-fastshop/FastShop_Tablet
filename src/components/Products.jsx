import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import React from 'react';
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
  if (deviceWidth >= 768) {
    return Math.round(size * scale * 1);
  } else {
    return Math.round(size * scale);
  }
};
const Products = () => {
  return (
    <View style={styles.orderTable}>
    <ScrollView>
    <View
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
        gap:normalizeFontSize(5)
      }}>


      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic Burger Solo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#145028',
          padding: 15,
          width: '30%',
          borderRadius: normalizeFontSize(5),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(8),
            color: '#fff',
          }}>
          Classic
        </Text>
      </TouchableOpacity>
     

    



    </View>
    </ScrollView>
    
   
  </View>
  );
};

const styles = StyleSheet.create({
  orderTable: {
    flex: 1, // Take up equal space with other components
    width: '100%',
    // justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    gap:normalizeFontSize(5),
    padding:normalizeFontSize(2),
    backgroundColor:'#cad9c9'
  },
});

export default Products;
