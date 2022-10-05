import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const CrearAnuncioServicio = props => {
  
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>

    <Text style={{
         fontSize: 15,
         color:'#000',
         marginLeft:14,
         marginRight:14,
         marginBottom:15,
         }}>
         Adquiera una de nuestras membresias y disfrute de sus beneficios:
   </Text>
   <TouchableOpacity
     style={{
       padding: 20,
       flexDirection: 'row',
       justifyContent: 'space-between',
       borderBottomColor: '#d7d6d6',
       borderBottomWidth: 1,
     }}
     onPress={() => navigation.navigate('Detalless')}>
     <Text
       style={{
         color: '#000',
         fontSize: 17,
         textAlign: 'center',
         fontWeight: 'bold'
       }}>
       Membresia Free - 0$
     </Text>
     

     <MaterialIcons name="arrow-forward-ios" size={18} color="#898484" />
   </TouchableOpacity>

   <TouchableOpacity
     style={{
       padding: 20,
       flexDirection: 'row',
       justifyContent: 'space-between',
       borderBottomColor: '#d7d6d6',
       borderBottomWidth: 1,
     }}
     onPress={() => navigation.navigate('Detalless')}>
     <Text
       style={{
         color: '#000',
         fontSize: 17,
         textAlign: 'center',
         fontWeight: 'bold'
       }}>
       Membresia Premium  
       <Text
       style={{
         color: 'green',
         fontSize: 15,
         textAlign: 'center',
         fontWeight: 'bold'
       }}>
         -50$ Mensual
     </Text>
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
export default CrearAnuncioServicio;