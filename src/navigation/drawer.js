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
import Compartir from '../screens/cooltask/compartir';
import Billetera from '../screens/cooltask/billetera';
import Retiro from '../screens/cooltask/retiro';
import Deposito from '../screens/cooltask/deposito';
import Guia from '../screens/cooltask/guia';
import Agentes from '../screens/cooltask/agentesexterno';
import { AuthContext } from '../context/AuthContext';
import Wallet from '../screens/cooltask/MiCuenta/wallet';
import Descargarapp from '../screens/cooltask/MiCuenta/descargarapp';
import Mipass from '../screens/cooltask/MiCuenta/mipass';
import SoporteApp from '../screens/cooltask/MiCuenta/soporte';
import AgenteVip from '../screens/cooltask/agentevip';
import AgenteInterno from '../screens/cooltask/agenteinterno';
import AgenteSuperior from '../screens/cooltask/agentesuperior';


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
    </Drawer.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />

      <Stack.Screen name="Compartir" component={Compartir}

        options={{
          headerShown: true,
          title: 'Compartir',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Billetera" component={Billetera}

        options={{
          headerShown: true,
          title: 'Billetera',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Retiro" component={Retiro}

        options={{
          headerShown: true,
          title: 'Retiro',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Deposito" component={Deposito}

        options={{
          headerShown: true,
          title: 'Deposito',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Guia" component={Guia}

        options={{
          headerShown: true,
          title: 'Guia de usuario',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Agentes" component={Agentes}

        options={{
          headerShown: true,
          title: 'Agente Externo',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Miwallet" component={Wallet}

        options={{
          headerShown: true,
          title: 'Wallet',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Descargarapp" component={Descargarapp}

        options={{
          headerShown: true,
          title: 'Descargar app',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Mipass" component={Mipass}

        options={{
          headerShown: true,
          title: 'Mi contraseña',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Soporteapp" component={SoporteApp}

        options={{
          headerShown: true,
          title: 'Soporte',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Agenteinterno" component={AgenteInterno}

        options={{
          headerShown: true,
          title: 'Agente Interno',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Agentevip" component={AgenteVip}

        options={{
          headerShown: true,
          title: 'Agente VIP',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Agentesuperior" component={AgenteSuperior}

        options={{
          headerShown: true,
          title: 'Agente Superior',
          headerStyle: { backgroundColor: '#0a1d60', },
          headerTintColor: '#fff',
        }}
      />

    </Stack.Navigator>
  );
}

