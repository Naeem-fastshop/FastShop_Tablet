import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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
const OrderButtons = () => {
  return (
    <View style={styles.orderTable}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F50000',
            padding: 15,
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            Void
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
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            +
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#921B1B',
            padding: 15,
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1C61AC',
            padding: 15,
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            Eat In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#740699',
            padding: 15,
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            Extra
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#83944A',
            padding: 15,
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            Amend
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0000FF',
            padding: normalizeFontSize(10),
            width: '32%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(9),
              color: '#fff',
            }}>
            Close Order
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#35AA47',
            padding: normalizeFontSize(10),
            width: '30%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(10),
              color: '#fff',
            }}>
            Complete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#000000',
            padding: normalizeFontSize(10),
            width: '32%',
            borderRadius: normalizeFontSize(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalizeFontSize(7.5),
              color: '#fff',
            }}>
            Pending Orders
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderTable: {
    flex: 1, // Take up equal space with other components
    backgroundColor: '#cad9c9',
    width: '100%',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    gap:normalizeFontSize(5),
    padding:normalizeFontSize(2)
  },
});

export default OrderButtons;
