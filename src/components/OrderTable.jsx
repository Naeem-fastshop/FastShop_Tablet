import {View, Text, StyleSheet, ScrollView,Dimensions, TouchableOpacity} from 'react-native';
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
  if(deviceWidth >= 768){
  return Math.round(size * scale * 1);
  }else{
    return Math.round(size * scale);
  }
};
const OrderTable = ({onUpdate}) => {
  const updateProduct = (product,price) =>
  {
    onUpdate({
      product:product,
      price:price
    })
  }
  return (
    <View style={styles.orderTable}>
       <View style={styles.title}>
          <Text
            style={{
              color: '#BAB5B5',
              backgroundColor: '#F1F6F8',
              padding: normalizeFontSize(5),
              borderRadius: normalizeFontSize(15),
              paddingLeft: normalizeFontSize(10),
              paddingRight: normalizeFontSize(10),
              marginTop:normalizeFontSize(0),
              fontWeight: '500',
            }}>
            {' '}
            Order Table{' '}
          </Text>
        </View>
      
          <View style={styles.tableheading}>
            <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(8), fontWeight: '500'}}>
                Product
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(8), fontWeight: '500'}}>
                Qty
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(8), fontWeight: '500'}}>
                Price
              </Text>
            </View>
          </View>
          <ScrollView>

          <View style={styles.table}>
          <TouchableOpacity onPress={()=>updateProduct('first product here',1200)}>
          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>updateProduct('second product here',1300)}>
          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>


          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                15
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                12.25
              </Text>
            </View>
          </View>


          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                2.25
              </Text>
            </View>
          </View>

          <View style={styles.tableBody}>
          <View style={{width: '60%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                Quator Solo Deluxe Burger
              </Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Text style={{color: '#000', fontSize: normalizeFontSize(7)}}>
                12.25
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
      <View style={{width:'100%',padding:normalizeFontSize(5),display:'flex',justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row',borderRadius:normalizeFontSize(5)}}>
      <Text style={{color:'#000',fontSize:normalizeFontSize(8),fontWeight:'500',marginRight:30}}>Total</Text>
      <Text style={{color:'#000',fontSize:normalizeFontSize(8),fontWeight:'500',marginRight:30}}>27.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderTable: {
    flex: 2, // Take up equal space with other components
    // backgroundColor: 'orange',
    width: '100%',
    justifyContent: 'center', // Center text vertically
    // alignItems: 'center', // Center text horizontally
    paddingLeft: normalizeFontSize(3),
    paddingRight: normalizeFontSize(3),
    marginBottom:normalizeFontSize(8)
  },
  title: {
    height: normalizeChartSize(30),
    marginTop: normalizeFontSize(2),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '100%',
    // height: 500,
    // backgroundColor: 'skyblue',
    marginTop: normalizeFontSize(0),
  },
  tableheading: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:normalizeFontSize(5),
    borderBottomWidth:1,
    borderBottomColor:'#cfddcc',
  
  },
  tableBody: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#E9F4F9',
    padding:normalizeFontSize(5),
    paddingTop:normalizeFontSize(8),
    paddingBottom:normalizeFontSize(8),
    borderRadius:normalizeFontSize(5),
    marginTop:normalizeFontSize(6)
  },
});

export default OrderTable;
