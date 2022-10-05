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
import GraciasRegistrar from '../screens/GraciasRegistrar';
import AnuncioRegistrado from '../screens/anuncioregistrado';

const Stack = createNativeStackNavigator();

const Start= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="SeleccionarRegistro" component={SeleccionarRegistro} options={{headerShown: false}} />
      <Stack.Screen name="Registrar" component={Registrar} options={{headerShown: false}}/>
      <Stack.Screen name="RegistrarDos" component={RegistrarDos} options={{headerShown: false}}/>
      <Stack.Screen name="GraciasRegistrar" component={GraciasRegistrar} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Start;
