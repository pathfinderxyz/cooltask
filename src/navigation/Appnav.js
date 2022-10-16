import React, {useContext,useEffect, useState} from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './start';
import MyDrawer from './drawer';
import { AuthContext } from './../context/AuthContext';
import Home from '../screens/home';
import Start2 from './start2';
import Tabs from './tabs';
import * as Linking from "expo-linking";

const prefix = Linking.makeUrl("/");

const AppNav = () => {

  const [data, setData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Login: "Login",
        Registrar: "Registrar",
      },
    },
  };

  const url = Linking.useURL();
 

   
    const{isLoading,userToken,userInfo}= useContext(AuthContext);

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
          </View>
        ); 
    }
 
  return (
    <NavigationContainer linking={linking}>
        {userToken == null || userToken == undefined ? <Start/>: <MyDrawer/> }
    </NavigationContainer>
  );
}

export default AppNav;