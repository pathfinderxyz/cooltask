import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Monedas from './../../assets/botones/monedas.png';

const Tareas = ({ navigation }) => {
  return (
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>

      <Text style={{
        fontSize: 15,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 10,
  
      }}>
        Las tareas se activaran cada 24 horas!
      </Text>

      
      <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Bono 1
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>

            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 27,
              }}>
              <Image
                source={Monedas}
                style={{ width: 30, height: 30 }}
              />$0.33
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: '#16c25e',
              padding: 8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Claim
            </Text>
          </TouchableOpacity>
          </View>

        </View>

        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Bono 2
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>

            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 27,
              }}>
              <Image
                source={Monedas}
                style={{ width: 30, height: 30 }}
              />$0.66
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: '#16c25e',
              padding: 8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Claim
            </Text>
          </TouchableOpacity>
          </View>

        </View>

        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Bono 3
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>

            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 27,
              }}>
              <Image
                source={Monedas}
                style={{ width: 30, height: 30 }}
              />$1.00
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: '#16c25e',
              padding: 8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Claim
            </Text>
          </TouchableOpacity>
          </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  listem: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
});
export default Tareas;