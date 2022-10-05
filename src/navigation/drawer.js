import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { View, Text, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Movies from './../screens/movies';
import Metodos from './../screens/metodos';
import Login from './../screens/login';
import Tabs from './tabs';
import CustomDrawer from './../componentes/CustomDrawer';
import Home from '../screens/home';
import Chat from '../screens/chat';
import Soporte from '../screens/soporte';
import CrearAnuncio from '../screens/crearanuncio';
import AnuncioRegistrado from '../screens/anuncioregistrado';
import Config from '../screens/settings';
import GameDetailsScreen from '../screens/DetallesJuegos';
import MembresiaFree from '../screens/membresias/MembresiaFree';
import MembresiaPremium from '../screens/membresias/MenbresiaPremium';
import MisDatos from '../screens/Cuenta/MisDatos';
import CambiarEmail from '../screens/Cuenta/CambiarEmail';
import CambiarPass from '../screens/Cuenta/CambiarPass';
import Notificacion from '../screens/Cuenta/Notificaciones';
import HistorialServicios from '../screens/Cuenta/Historial';
import Estado from '../screens/Cuenta/Estado';
import Detalless from '../screens/detalles2';
import { AuthContext } from '../context/AuthContext';
import PromoAnuncio from '../screens/promoanuncio';
import EditarAnuncios from '../screens/editaranuncios';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {

  const { userInfo } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0a1d60',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        }
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),

        }}
      />

      {userInfo[0].rol == 'cliente' ?

        <Drawer.Screen
          name="Crear Anuncio"
          component={CrearAnuncio}
          options={{
            headerStyle: {
              backgroundColor: '#0a1d60',
            },
            headerTintColor: '#fff',
            headerShown: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="add-outline" size={22} color={color} />
            ),
          }} />
        :
        <Drawer.Screen
          name="Membresias"
          component={Metodos}
          options={{
            headerStyle: {
              backgroundColor: '#0a1d60',
            },
            headerTintColor: '#fff',
            headerShown: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="rocket-outline" size={22} color={color} />
            ),
          }} />
      }

      {userInfo[0].rol == 'cliente' && (
        <Drawer.Screen
          name="Misanuncios"
          component={Config}
          options={{
            headerStyle: {
              backgroundColor: '#0a1d60',
            },
            title: "Mis Anuncios",
            headerTintColor: '#fff',
            headerShown: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="albums-outline" size={22} color={color} />
            ),
          }} />)}

      {userInfo[0].rol == 'cliente' && (
        <Drawer.Screen
          name="Resaltar anuncio"
          component={PromoAnuncio}
          options={{
            headerStyle: {
              backgroundColor: '#0a1d60',
            },
            title: "Resaltar Anuncios",
            headerTintColor: '#fff',
            headerShown: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="ios-medal-outline" size={22} color={color} />
            ),
          }} />)}


      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen
        name="Soporte"
        component={Soporte}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }} />


    </Drawer.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
      <Stack.Screen name="Membresia Free" component={MembresiaFree}
        title='Membresia Free'
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Membresia Premium" component={MembresiaPremium}
        title='Membresia Premium'
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="MisDatos" component={MisDatos}

        options={{
          headerShown: true,
          title: 'Mis Datos',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="CambiarEmail" component={CambiarEmail}

        options={{
          headerShown: true,
          title: 'Cambiar Datos',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="CambiarPass" component={CambiarPass}

        options={{
          headerShown: true,
          title: 'Contraseña',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Notificacion" component={Notificacion}

        options={{
          headerShown: true,
          title: 'Notificaciones',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Historial" component={HistorialServicios}

        options={{
          headerShown: true,
          title: 'Historial',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Estado" component={Estado}

        options={{
          headerShown: true,
          title: 'Estado',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="detalless" component={Detalless}

        options={{
          headerShown: true,
          title: 'Detalles',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="RegistroExitoso" component={AnuncioRegistrado}
        options={{
          headerShown: true,
          title: 'Registro Exitoso',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
       <Stack.Screen name="EditarAnuncio" component={EditarAnuncios}
        options={{
          headerShown: true,
          title: 'Editar Anuncio',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

