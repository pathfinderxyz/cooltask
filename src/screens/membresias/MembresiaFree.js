import * as React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const MembresiaFree= ({navigation}) => {
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
           Usted obtendra la membresia free inmediatamente despues de registrarse en nuestra App sin ningun costo adicional.
      </Text>
      <Text style={{
           color: '#000',
            fontSize: 17,
            textAlign: 'left',
            fontWeight: 'bold',
            marginLeft:14,
            marginRight:14,
            marginBottom:15
            }}>
            Beneficios
          </Text>
          <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            lineHeight:30
            }}>
           *Ver servicios publicados.{'\n'}
           *Ver correo del solicitante para enviar ofertas.{'\n'}
           *Hasta 1 Servicio en curso.{'\n'}
           *No incluye Chat.{'\n'}
           *No incluye notificaciones.
      </Text>
      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Membresia Premium')}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Cambiar a Premium
        </Text>
        

        <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
      </TouchableOpacity>
      <Text style={{
            fontSize: 14,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            marginTop:20
            }}>
            Para mas informacion puede comunicarse a nuestro correo info@applogistick.com
          </Text>

    </View>
  );
}
export default MembresiaFree;