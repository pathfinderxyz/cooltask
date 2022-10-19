import "react-native-gesture-handler";
import React, { useContext, useState } from "react";
import { View, Text, Settings } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  StackActions,
  StackNavigator,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Movies from "../screens/movies";
import Metodos from "../screens/metodos";
import Login from "../screens/login";
import Tabs from "./tabs";
import CustomDrawer from "../componentes/CustomDrawer";
import Home from "../screens/home";
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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root2() {
  const { userInfo } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#0a1d60",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
   
    </Drawer.Navigator>
  );
}

