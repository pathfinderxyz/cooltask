import React, { useContext, useState } from 'react';
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

const url = "https://api.cooltask.homes/public/usuarios";

const Wallet=  ({navigation})=> {

  const { userInfo } = useContext(AuthContext);

  const [Nombre, setNombre] = useState(null);
  const usuario = userInfo[0].id;

  const [Error, setError] = useState(false);

  const validardatos = () => {
    console.log(Nombre);
    console.log(usuario);
    if (Nombre !== null) {
      EditarUsuario();
    } else {
      setError(true);
    }
  };

  const EditarUsuario = () => {
    axios
      .put(url+'/'+usuario, {Nombre})
      .then((res) => {
        console.log(res.data);
        navigation.navigate("MisDatos");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <View showsVerticalScrollIndicator={false}>
 
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
          value={Nombre}
          onChangeText={(text) => setNombre(text)}
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