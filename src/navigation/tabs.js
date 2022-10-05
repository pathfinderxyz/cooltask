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

const Tab = createBottomTabNavigator();




function Tabs() {

  const { userInfo } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#07092d",
          borderTopColor: "#07092c",
          paddingBottom: 10,
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
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Movies}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={24} />
          ),
        }}
      />
       {userInfo[0].rol == 'cliente' ?
      <Tab.Screen
        name="Mis Anuncios Activos"
        component={Config}
        options={{
          headerStyle: {
            backgroundColor: '#0a1d60',
          },
          headerTintColor: '#fff',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" color={color} size={24} />
          ),
        }}
      />
      :
      <Tab.Screen
      name="Anuncios Contratados"
      component={AnunciosContratados}
      options={{
        headerStyle: {
          backgroundColor: '#0a1d60',
        },
        headerTintColor: '#fff',
        headerShown: true,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="checkmark-done-circle" color={color} size={24} />
        ),
      }}
    />
    }
      <Tab.Screen
        name="Cuenta"
        component={Cuenta}
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
