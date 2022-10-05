import React, {useContext,useState} from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../context/AuthContext';

const url = "https://apilogistick.iawork.tk/public/anuncios";

const MisDatos= ({navigation}) => {

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
           Datos registrados al crear tu cuenta en APP Logistick.
      </Text>
      <Text style={{
           color: '#000',
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
            marginLeft:14,
            marginRight:14,
            marginBottom:15
            }}>
            Nombre Completo: {userInfo[0].nombre}
          </Text>
          <Text style={{
           color: '#000',
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
            marginLeft:14,
            marginRight:14,
            marginBottom:15
            }}>
            Correo: {userInfo[0].username}
          </Text>
          <Text style={{
           color: '#000',
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
            marginLeft:14,
            marginRight:14,
            marginBottom:15
            }}>
            Pais: {userInfo[0].pais}
          </Text>
          
      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('CambiarEmail')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Editar datos
        </Text>
        

        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>

    </View>
  );
}
export default MisDatos;