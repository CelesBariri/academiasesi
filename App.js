import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Localizacao';
import Cadatrar from './src/Cadatrar';
import {useState} from "react";



const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: "red"},
        tabBarLabelStyle: {color: "white"},
        headerTitleStyle: {color: "white"},
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        
      }}  
      >
     <Tab.Screen
      name='Home'
      component={Home} 
      options={{
          tabBarLabel: 'Home',
          tabBarIconStyle: {color: "white"},
          tabBarIcon: ({color, size}) => (
       <MaterialCommunityIcons name="home" color={color} size={size} />
       ),
      }}/>
      <Tab.Screen
      name='Cadatrar'
      component={Cadatrar} 
      options={{
          tabBarLabel: 'Cadatrar',
          tabBarIconStyle: {color: "white"},
          tabBarIcon: ({color, size}) => (
       <MaterialCommunityIcons name="arm-flex" color={color} size={size} />
       ),
      }}/>
       
     
      </Tab.Navigator>
    </NavigationContainer>
  );
}