import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fastshop} from '../utils/Color';
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
const ModelShow = ({isVisible, onClose}) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
            Amendments
          </Text>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              paddingVertical: 5,
            }}></View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              marginTop: 10,
            }}>
            <View style={{width: '70%'}}>
              <Text style={{color: '#000', fontSize: 10, paddingVertical: 2}}>
                Product
              </Text>
              <TextInput value="" style={styles.input} />
            </View>

            <View style={{width: '28%'}}>
              <Text style={{color: '#000', fontSize: 10, paddingVertical: 2}}>
                Price
              </Text>
              <TextInput value="" style={styles.input} />
            </View>
          </View>

          <View style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:'wrap',gap:10,marginTop:15}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No onions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Tomatos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Salad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Cheese</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Sauce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Jelepenos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'#fff',textAlign:'center'}}>No Lettuce</Text>
            </TouchableOpacity>
          </View>

          <View style={{width:'100%',display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
          <TouchableOpacity onPress={onClose} style={[styles.btn,{marginTop:20,backgroundColor:'#35aa47'}]}>
            <Text style={{color:'#fff',textAlign:'center'}}>Done</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: '#cad9c9',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: normalizeFontSize(3),
    borderColor: fastshop,
    borderWidth: normalizeFontSize(1),
    height: normalizeChartSize(25),
    color: '#000',
  },
  btn:{
    backgroundColor:'#145028',
    width:100,
    padding:10,
    borderRadius:5,
    
  }
});
export default ModelShow;
