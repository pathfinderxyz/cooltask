import * as React from 'react';
import { View, Text,Button,TouchableOpacity,StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';




const WalletRegistrada= ({navigation}) => {
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
                fontSize: 31,
                marginBottom: 20,
              }}>
              Wallet Registrada
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
          
          <Text style={{
        fontSize: 12,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 30,
        borderColor:'#000'
  
      }}>
        Para cambiar su wallet debe comunicarse con el soporte.
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
    }
  });
export default WalletRegistrada;