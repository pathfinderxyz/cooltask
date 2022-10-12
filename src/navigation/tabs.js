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
import MyDrawer from "./drawer";
import Cuenta from "../screens/cuenta";
import { AuthContext } from '../context/AuthContext';
import AnunciosContratados from "../screens/anuncioscontratados";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Tareas from "./../screens/cooltask/tareas";
import Referidos from "./../screens/cooltask/referidos";
import Micuenta from "./../screens/cooltask/micuenta";

const Tab = createBottomTabNavigator();




function Tabs() {

  const { userInfo } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        component={Home}
        options={{
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

/* const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
  tabBarShowLabel: false,
}; */

export default Tabs;
