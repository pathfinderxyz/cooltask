import React, { useContext, useState,useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InputField from "./../../../componentes/InputFliedClaro";
import CustomButton from "./../../../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import { AuthContext } from './../../../context/AuthContext';
import usdtimg from './../../../assets/botones/usdt.png';

const url = "https://api.cooltask.homes/public/wallet";
const urlinfouser = "https://api.cooltask.homes/public/usuarios";


const Wallet=  ({navigation})=> {

  const { userInfo } = useContext(AuthContext);
  const [verificarwallet, setVerificarWallet] = useState("");
  const [wallet, setWallet] = useState(null);
  const [cambiowallet, setCambioWallet] = useState(false);
  const [data, setData] = useState([]);
  const usuario = userInfo[0].id;
  

  const [Error, setError] = useState(false);

  const validardatos = () => {
    console.log(wallet);
    console.log(usuario);
    if (wallet!== null) {
      EditarWallet();
    } else {
      setError(true);
    }
  };

  const EditarWallet = () => {
    axios
      .put(url+'/'+usuario, {wallet})
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Walletregistrada");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const peticionGet = async () => {
    await axios.get(urlinfouser+'/'+usuario).then((response) => {
      setData(response.data[0]);
      setCambioWallet(true);
    });
  };

  console.log(data.wallet);

useEffect(async() => {
   await peticionGet();
}, [cambiowallet]);

  return (
    <ScrollView>
      <View showsVerticalScrollIndicator={false}>
 
       {data.wallet !=="" ?
       <View style={styles.listemhistorial}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 30,
          }}
        >
         Mi wallet
        </Text>
       
        <Text
          style={{
            fontSize: 14,
            color: '#07092c',
            marginBottom: 25,
          }}
        >
        {data.wallet}
        </Text>

        <TouchableOpacity onPress={() =>navigation.navigate('Soporteapp')}
            style={{
              backgroundColor: '#07092c',
              padding: 8,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>
             Solicitar cambio
            </Text>
          </TouchableOpacity>

        </View>
        :
        <View style={styles.listemhistorial}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 30,
          }}
        >
         Vincular wallet
        </Text>
        {Error && (
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "#000",
              marginBottom: 30,
            }}
          >
            ¡Error, por favor rellene todos los campos!
          </Text>
        )}
        <Text
          style={{
            fontSize: 11,
            color: '#07092c',
            marginBottom: 5,
          }}
        >
        Introduzca la Direccion de su billetera de USDT
        </Text>

        <InputField
          value={wallet}
          onChangeText={(text) => setWallet(text)}
        />
          <Text
          style={{
            fontSize: 11,
            color: '#07092c',
            marginBottom: 21,
            marginTop:-21
          }}
        >
        Red: Tron(TRC20)
        </Text>
      

      <TouchableOpacity onPress={validardatos}
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

             Vincular a mi cuenta
            </Text>
          </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 20,
            marginTop: 30,
          }}
        >
          Nota:
        </Text>

        <Text
          style={{
            fontSize: 11,
            color: "#000",
          }}
        >
          * Una vez vinculada la wallet no podra ser modificada, debera comunicarse con el soporte.
        </Text>


        </View>

      }

      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  listemhistorial: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
});
export default Wallet;