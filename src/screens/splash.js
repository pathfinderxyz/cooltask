import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import Favicon from './../assets/img/log.png';
/* import {Colors} from '../../src/constants' */


const Splash = ({navigation}) => {

   setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000)
    return (
       <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}} >
            <Image source={Favicon} style={{width:250,height:250}}  />    
            
        </View>
    )
}

export default Splash;