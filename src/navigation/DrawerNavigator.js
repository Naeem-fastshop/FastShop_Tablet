import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer';
import Dashboard from '../screens/Dashboard';
import TopBar from '../components/TopBar';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name='dashboard' component={Dashboard} options={{headerShown:false}}/>
        <Drawer.Screen name='topbar' component={TopBar} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator