import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import { windowWidth } from './../utils/Dimensions';
import { LinearGradient } from 'expo-linear-gradient';

export default function ListItemHome({photo, title, subTitle, isFree, ciudad,pais, price, onPress}) {
  return (
    <View  style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#0c3758', 'transparent']}
        style={styles.background}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
     
        <View style={{width: windowWidth - 220}}>
        <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          
        </View>
        
      </View>
      
      <TouchableOpacity onPress={onPress} style={{
        backgroundColor:'orange',
        padding:10,
        width: 100,
        borderRadius: 7,
      }}>
      <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 11,
          fontWeight:'600'
        }}>
         Oferta inicial
        </Text>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}>
         
          {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 4,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 25,
    backgroundColor:'#365a76',
    padding:25,
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