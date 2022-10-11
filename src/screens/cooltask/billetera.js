import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import usdtimg from './../../assets/botones/usdt.png';

const Billetera = ({ navigation }) => {
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
          Acumulado
            
          </Text>
           
          </View>
             <Image
                source={usdtimg}
                style={{ width: 60, height: 60,marginBottom:15}}
              />
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 31,
                marginBottom: 20,
              }}>
              $122.00 USDT
            </Text>
            <TouchableOpacity
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

              Retirar
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
        El minimo de retiro para los fondos es de 10$.
      </Text>
        </View>
       
        <Text
          style={{
            fontSize: 17,
            color: "#000",
            padding: 14,
            marginHorizontal: 20,
            fontWeight: 'bold',
          }}
        >
          Historial de operaciones
          
        </Text>
        <View style={styles.listemhistorial}>
        <Text
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          Aun no has realizado ningun movimiento!
          
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
  listemhistorial: {

    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
});
export default Billetera;