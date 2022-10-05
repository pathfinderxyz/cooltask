import React from 'react'
import { SafeAreaView,StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Favicon from './../assets/img/logo.png';
import { LinearGradient } from 'expo-linear-gradient';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />
      
      <View>
        <Image
          source={Favicon}
          style={{ width: 270, height: 270}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#060f32',
          padding: 20,
          marginTop: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Comienza ahora
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
    backgroundColor: '#0a1d60',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});

export default Onboarding;
