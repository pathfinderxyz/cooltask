import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import { windowWidth } from './../utils/Dimensions';
import { LinearGradient } from 'expo-linear-gradient';

export default function ListemSaldo({photo, title, subTitle, isFree, ciudad,pais, price, onPress}) {
  return (
    <View  style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#16c25e', '#16c25e']}
        style={styles.background}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
     
        <View style={{width: windowWidth - 220}}>
        <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom:10,
            }}>
          {title}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight:'bold',
            }}>
            Saldo
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight:'bold',
              fontSize: 25,
            }}>
            $ {price} 
          </Text>
        </View>
        
      </View>

      <TouchableOpacity onPress={onPress} style={{
        backgroundColor:'#07092c',
        padding:8,
        width: 100,
        borderRadius: 7,
      }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}>
         
          Ver
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 25,
    backgroundColor:'#16c25e',
    padding:20,
    borderRadius:15
  },
  background: {
    position: 'absolute',
    borderRadius:15,
    left: 0,
    right: 0,
    top: 0,
    height: 50,
  }
});