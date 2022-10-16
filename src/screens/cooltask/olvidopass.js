import * as React from 'react';
import { View, Text, Button,TouchableOpacity,TouchableWithoutFeedback, StyleSheet, Linking  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons";

const url = "https://t.me/atencion_al_cliente_Cooltask";

const Olvidopass= ({navigation}) => {


const AbriTelegram = () => {
  Linking.openURL(url) ;
};

  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
          Puedes escribirnos a nuestro grupo de atencion al cliente enviandonos tu correo 
          registrado y te enviaremos la contraseña al mismo. 
      </Text>
      
      <Text style={{
            fontSize: 16,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            marginTop:20
            }}>
           Atencion al cliente:
          </Text>

        <TouchableOpacity onPress={AbriTelegram}
            style={{
              backgroundColor: '#0088cc',
              padding: 10,
              borderRadius: 7,
              marginHorizontal:10
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>
          Atencion al cliente cooltask 
          <Ionicons
            name="arrow-forward"
            size={15}
            color="#fff"
            style={{ marginRight: 20 }}
          />
            </Text>
          </TouchableOpacity>
     
    </View>
  );
}
export default Olvidopass;