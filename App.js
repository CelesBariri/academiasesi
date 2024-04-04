import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import Treino from './src/Treino';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Inicio from './src/Inicio';
import Login from './src/Login';
import { useState } from 'react';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const[ logado, setLogado ] = useState( false );
  const[ cadastro, setCadastro ] = useState( false );

  if( !logado ) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro}/> )
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado} /> )
  }

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
      name='Treino'
      component={Treino} 
      options={{
          tabBarLabel: 'Treino',
          tabBarIconStyle: {color: "white"},
          tabBarIcon: ({color, size}) => (
       <MaterialCommunityIcons name="arm-flex" color={color} size={size} />
       ),
      }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
