import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet,Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import logo from './../../../assets/logo/cool.png';

const url = "https://apk.cooltask.homes";

const Descargarapp = ({ navigation }) => {

  const Abrirapp = () => {
    Linking.openURL(url) ;
  };

  return (
    <View style={{ marginHorizontal: 10}}>

     

      <Text style={{
        fontSize: 16,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
      }}>

      </Text>
      
        <View style={styles.listem}>
        <View>
          <Text
            style={{
              color: '#07092c',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
         Descargar
            
          </Text>
          
          </View>

          <Image
                source={logo}
                style={{ width: 250, height: 250,marginBottom:15,marginLeft:18}}
              />
            <TouchableOpacity onPress={Abrirapp}
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

         <Ionicons
            name="md-download"
            size={18}
            color="#fff"
            style={{ marginRight: 20 }}
          /> Descargar APP
            </Text>
          </TouchableOpacity>
          
          <Text style={{
        fontSize: 12,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 30,
        borderColor:'#000'
  
      }}>
        Puedes usar nuestra app en el telefono y en el navegador de tu movil.
      </Text>
        </View>

  

    </View>
  );
}

const styles = StyleSheet.create({
  listem: {
   
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems:'center'
  },
});
export default Descargarapp;