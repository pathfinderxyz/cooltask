import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import walletimg from './../../assets/botones/walletusdt.jpg';

const Deposito = ({ navigation }) => {
  return (
    <ScrollView>
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
          Deposito USDT 
            
          </Text>
           
          </View>
             <Image
                source={walletimg}
                style={{ width: 250, height: 250,marginBottom:15,marginLeft:31}}
              />
                <Text
              style={{
                color: '#07092c',
                fontSize: 10,
                marginBottom: 8
              }}>
                Direccion de la Billetera

            </Text>
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 13,
                marginBottom: 20,
              }}>
                TA1dFgth42vhnZkQn4ZTpwVkZqtdVtWDXb

            </Text>
            <Text
              style={{
                color: '#07092c',
                fontSize: 10,
                marginBottom: 8
              }}>
                Red

            </Text>
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 13,
                marginBottom: 20,
              }}>
                Tron(TRC20)

            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Confirmardeposito")}
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

             Confirmar Deposito
            </Text>
          </TouchableOpacity>

    
        </View>
       
        <View style={styles.listemhistorial}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 30,
            marginTop: 10,
          }}
        >
          Instrucciones para depositar:
        </Text>


        <Text
          style={{
            fontSize: 11,
            color: "#000",
          }}
        >
          * La cantidad minima de deposito es de 20 usdt.{'\n'}{'\n'}
          * Una vez realizado el deposito presione "Confirmar deposito" e Introduzca
          los datos de la transaccion, nuestro equipo de trabajo procedera a verificarlo.{'\n'}{'\n'}
          * Puede que nuestro equipo de soporte solicite 
          informacion adicional como capture de pantallas.{'\n'}{'\n'}
          *Los depositos pueden tardar hasta 24 horas en verificarse.
        </Text>


        </View>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listem: {
   
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    
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