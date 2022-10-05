import * as React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const PromoAnuncio= ({navigation}) => {
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
           Puede pagar para destacar su anuncio en los primeros 5 lugares.
      </Text>
      
      <TouchableOpacity
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:'orange',
          borderRadius: 8
    
        }}
        >
        <Ionicons name="card" size={20} color="#000" />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}>
          Pagar por Mercadopago
        </Text>
        
        <MaterialIcons name="arrow-forward-ios" size={18} color="#000" />
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
export default PromoAnuncio;
