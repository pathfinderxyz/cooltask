import React from 'react'
import { SafeAreaView,StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Favicon from './../assets/img/logo.png';
import { LinearGradient } from 'expo-linear-gradient';

const SeleccionarRegistro = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />
      
      <Text
          style={{
            fontSize: 25,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 30,
          }}>
          ¿Como deseas registrarte?
        </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          padding: 20,
          marginTop: 20,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Registrar')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Cliente
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          padding: 20,
          marginTop: 20,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('RegistrarDos')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Logialiados
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07092c',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});

export default SeleccionarRegistro;
