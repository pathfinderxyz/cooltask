import "react-native-gesture-handler";
import React, { useContext, useState } from 'react';
import { View, Text, Settings } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  StackActions,
  StackNavigator,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Movies from "./../screens/movies";
import Home from "./../screens/home";
import Config from "./../screens/settings";
import Cuenta from "../screens/cuenta";
import AnunciosContratados from "../screens/anuncioscontratados";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Tareas from "./../screens/cooltask/tareas";
import Referidos from "./../screens/cooltask/referidos";
import Micuenta from "./../screens/cooltask/micuenta";
import Compartir from "../screens/cooltask/compartir";
import Billetera from "../screens/cooltask/billetera";
import Retiro from "../screens/cooltask/retiro";
import Deposito from "../screens/cooltask/deposito";
import Guia from "../screens/cooltask/guia";
import Agentes from "../screens/cooltask/agentesexterno";
import { AuthContext } from "../context/AuthContext";
import Wallet from "../screens/cooltask/MiCuenta/wallet";
import Descargarapp from "../screens/cooltask/MiCuenta/descargarapp";
import Mipass from "../screens/cooltask/MiCuenta/mipass";
import SoporteApp from "../screens/cooltask/MiCuenta/soporte";
import AgenteVip from "../screens/cooltask/agentevip";
import AgenteInterno from "../screens/cooltask/agenteinterno";
import AgenteSuperior from "../screens/cooltask/agentesuperior";
import WalletRegistrada from "../screens/cooltask/MiCuenta/walletregistrada";
import ClaveCambiada from "../screens/cooltask/MiCuenta/clavecambiada";
import Confirmarretiro from "../screens/cooltask/confirmarretiro";
import Confirmardeposito from "../screens/cooltask/confirmardeposito";
import Depositoproceso from "../screens/cooltask/depositoenproceso";
import Concurso from "../screens/cooltask/concurso";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function StackLink() {
  return (
    <Stack.Navigator>

     <Stack.Screen
        name="Home"
        component={Home}
        options={{
          statusBarColor:'#0a1d60',
          headerShown: false,
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="Compartir"
        component={Compartir}
        options={{
          statusBarColor:'#0a1d60',
          headerShown: true,
          title: "Compartir",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="Billetera"
        component={Billetera}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Billetera",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Retiro"
        component={Retiro}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Retiro",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Deposito"
        component={Deposito}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Deposito",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Guia"
        component={Guia}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Guia de usuario",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Agentes"
        component={Agentes}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Agente Externo",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Miwallet"
        component={Wallet}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Wallet",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Descargarapp"
        component={Descargarapp}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Descargar app",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Mipass"
        component={Mipass}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Mi contraseña",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Soporteapp"
        component={SoporteApp}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Soporte",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Agenteinterno"
        component={AgenteInterno}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Agente Interno",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Agentevip"
        component={AgenteVip}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Agente VIP",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Agentesuperior"
        component={AgenteSuperior}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Agente Superior",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Walletregistrada"
        component={WalletRegistrada}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Mi Wallet",
          headerLeft: null,
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Clavecambiada"
        component={ClaveCambiada}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Mi Contraseña",
          headerLeft: null,
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Confirmarretiro"
        component={Confirmarretiro}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Retiro procesado",
          headerLeft: null,
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
       <Stack.Screen
        name="Confirmardeposito"
        component={Confirmardeposito}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Confirmando Deposito",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
       <Stack.Screen
        name="depositoproceso"
        component={Depositoproceso}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Deposito en proceso",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
       <Stack.Screen
        name="concurso"
        component={Concurso}
        options={{
          headerShown: true,
          statusBarColor:'#0a1d60',
          title: "Deposito en proceso",
          headerStyle: { backgroundColor: "#0a1d60" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}


export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#07092d",
          borderTopColor: "#07092c",
          paddingTop: 5,
          paddingBottom: 5,
          height: 60
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
      }}
      >
      <Tab.Screen
        name="Home"
        component={StackLink}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Tareas"
        component={Tareas}
        options={{
          title: 'Tareas Diarias',
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-task" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Referidos"
        component={Referidos}
        options={{
          title: 'Mi equipo',
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-tree" color={color} size={24} />
          ),
        }}
      />
   
      <Tab.Screen
        name="Cuenta"
        component={Micuenta}
        options={{
      
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          
          headerTintColor: '#fff',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


