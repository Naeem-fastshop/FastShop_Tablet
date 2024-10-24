import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text style={{color:'black'}}>Custom Drawer</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={{color:'#000'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
