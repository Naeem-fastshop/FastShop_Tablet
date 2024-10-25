import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { fastshop } from '../utils/Color'

const ProductDisplayTop = ({productData,openModal}) => {
  return (
   <TouchableOpacity onPress={openModal}>
     <View style={styles.product}>
      <Text style={[styles.producttext,{fontWeight:'600',width:'20%'}]}>Product</Text>
      <Text style={[styles.producttext,{width:'30%',textAlign:'left'}]}>{productData.product}</Text>
      <Text style={[styles.producttext,{fontWeight:'600',width:'20%',textAlign:'center'}]}>Price</Text>
      <Text style={[styles.producttext,{width:'30%',textAlign:'center'}]}>{productData.price}</Text>
    </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

product:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:fastshop,
    paddingVertical:5,
},
producttext:{
    padding:5,
    color:'#000',
    borderColor:'#e8e8e8',
    borderWidth:1

}


})
export default ProductDisplayTop