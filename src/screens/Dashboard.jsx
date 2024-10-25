import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import OrderTable from '../components/OrderTable';
import Form from '../components/Form';
import OrderButtons from '../components/OrderButtons';
import Categories from '../components/Categories';
import Products from '../components/Products';
import SubCat from '../components/SubCat';
import ProductDisplayTop from '../components/ProductDisplayTop';
import ModelShow from '../components/ModelShow';
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
const Dashboard = ({navigation}) => {
  // Top product display
  const [productData, setProductData] = useState({
    product: '',
    price: '',
  });

  const handleProductUpdate = newData => {
    setProductData({
      product: newData.product,
      price: newData.price,
    });
  };

  // End of top product display

  // Model show work
  const [isModalVisible, setModalVisible] = useState(false);
  

  // Function to open modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalVisible(false);
  };




  return (
    <>
      <TopBar />
      <ProductDisplayTop productData={productData} openModal={openModal}/>
      <ModelShow isVisible={isModalVisible} onClose={closeModal} />
    

      <View style={styles.dashboard}>
        <View style={styles.leftSide}>
          <OrderTable onUpdate={handleProductUpdate} />
          <OrderButtons />
          <Form />
        </View>

        <View style={styles.rightSide}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfddcc',
              width: '100%',
              margin: normalizeFontSize(3),
            }}>
            <Text style={{color: '#BAB5B5', padding: normalizeFontSize(3)}}>
              Categories
            </Text>
          </View>
          <Categories />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfddcc',
              width: '100%',
              margin: normalizeFontSize(3),
            }}>
            <Text style={{color: '#BAB5B5', padding: normalizeFontSize(3)}}>
              Products
            </Text>
          </View>
          <Products />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfddcc',
              width: '100%',
              margin: normalizeFontSize(3),
            }}>
            <Text style={{color: '#BAB5B5', padding: normalizeFontSize(3)}}>
              Sub Category
            </Text>
          </View>
          <SubCat openModal={openModal}/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row', // Ensure children are side-by-side
  },
  leftSide: {
    flex: 1.1, // Take up half of the parent container's width
    backgroundColor: '#cad9c9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#d0e2cc',
    borderRightWidth: 1,
    padding: normalizeFontSize(3),
  },
  rightSide: {
    flex: 1, // Take up half of the parent container's width
    backgroundColor: '#cad9c9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalizeFontSize(3),
  },
});

export default Dashboard;
