import React, {useContext,useState} from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../context/AuthContext';

const url = "https://apilogistick.iawork.tk/public/anuncios";

const Estado= ({navigation}) => {

  const {userInfo}= useContext(AuthContext);
 
  return (
    <View style={{marginHorizontal:10,marginTop: 20, flexDirection: 'row',
    justifyContent: 'space-between',}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
         El Estado de su membresia free es:
      </Text>
      <Text style={{
            fontSize: 16,
            color:'green',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            fontWeight:'bold'
            }}>
         Activo
      </Text>
      
    </View>
  );
}
export default Estado;