import React, {useContext} from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './start';
import MyDrawer from './drawer';
import { AuthContext } from './../context/AuthContext';
import Home from '../screens/home';
import Start2 from './start2';

const AppNav = () => {
   
    const{isLoading,userToken,userInfo}= useContext(AuthContext);

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
          </View>
        ); 
    }
  console.log('Valor de token', userToken);
  return (
    <NavigationContainer>
        {userToken == null || userToken == undefined ? <Start/>: <MyDrawer/> }
    </NavigationContainer>
  );
}

export default AppNav;