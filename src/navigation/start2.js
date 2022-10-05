import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Registrar from './../screens/registrar'
import Home from '../screens/home';
import MyDrawer from './drawer';
import Onboarding from '../screens/OnboardingScreen';
import GameDetailsScreen from '../screens/DetallesJuegos';
import Splash from '../screens/splash';
import SeleccionarRegistro from '../screens/seleccionarregistro';
import RegistrarDos from '../screens/registrardos';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './tabs';
import Detalless from '../screens/detalles2';

const Stack = createNativeStackNavigator();

const Start2= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyDrawer} options={{headerShown: false}}/>
      
      <Stack.Screen name="Detalles" component={GameDetailsScreen} 
      options={
        ({ route, navigation }) => ({
        title: route.params?.title,
        headerShown: true,
        headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
      })
      }/>
      
    </Stack.Navigator>
  );
};

export default Start2;
