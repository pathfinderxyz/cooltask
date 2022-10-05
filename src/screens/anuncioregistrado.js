import * as React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';




const MembresiaPremium= ({navigation}) => {
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>
        
       <Text style={{
            fontSize: 18,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
             El anuncio se registro con exito
      </Text>

      <TouchableOpacity
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:'#33cf1e',
          borderRadius: 8
    
        }}
        onPress={() => navigation.navigate('Misanuncios')}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}>
          Ir Anuncios
        </Text>
        
        <MaterialIcons name="arrow-forward-ios" size={18} color="#000" />
      </TouchableOpacity>
    

    </View>
  );
}
export default MembresiaPremium;