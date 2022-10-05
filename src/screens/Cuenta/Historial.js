import React, {useContext,useState} from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../context/AuthContext';

const url = "https://apilogistick.iawork.tk/public/anuncios";

const HistorialServicios= ({navigation}) => {

  const {userInfo}= useContext(AuthContext);
 
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
          Historial de servicios adquiridos en la plataforma.
      </Text>
      
    </View>
  );
}
export default HistorialServicios;