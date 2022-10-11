import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import walletimg from './../../assets/botones/walletusdt.png';

const Deposito = ({ navigation }) => {
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
          USDT TRC20
            
          </Text>
           
          </View>
             <Image
                source={walletimg}
                style={{ width: 250, height: 250,marginBottom:15}}
              />
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 10,
                marginBottom: 20,
              }}>
                0x3bE018a933B7d920a5d553DF3473c52b17bfB3A0

            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: '#07092c',
              padding: 12,
             
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

             Realizar Deposito
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
export default Deposito ;