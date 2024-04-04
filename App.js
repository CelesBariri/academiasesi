import { NavigationContainer } from '@react-navigation/native';
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
      <Tab.Navigator initialRouteName="Inicio"
          screenOptions={{
            headerShown: false
          }}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
