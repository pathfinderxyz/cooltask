import * as React from 'react';
import { View, Text,Button,TouchableOpacity,StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';




const ClaveCambiada= ({navigation}) => {
  return (
    <View style={{marginHorizontal:10,marginTop: 20}}>
        
        <View style={styles.listem}>
        <View>
          </View>
          <Ionicons
            name="checkmark-done-circle-sharp"
            size={100}
            color="green"
            style={{ padding: 20 }}
          />
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 21,
                marginBottom: 20,
              }}>
              Contraseña Actualizada
            </Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Cuenta')}
            style={{
              backgroundColor: '#07092c',
              padding: 8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              volver
            </Text>
          </TouchableOpacity>
          
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
    }
  });
export default ClaveCambiada;