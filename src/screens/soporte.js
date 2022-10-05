import * as React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Soporte= ({navigation}) => {
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

       <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
          Para mas informacion puede comunicarse a nuestro correo o si es victima de algun incumplimiento por parte de algun cliente.
      </Text>
      
      <Text style={{
            fontSize: 16,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            marginTop:20
            }}>
           Correo: info@applogistick.com
          </Text>
     
    </View>
  );
}
export default Soporte;