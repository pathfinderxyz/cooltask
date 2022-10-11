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

import InputField from "./../../componentes/InputFliedClaro";
import CustomButton from "./../../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import { AuthContext } from './../../context/AuthContext';
import usdtimg from './../../assets/botones/usdt.png';

const url = "https://apilogistick.iawork.tk/public/usuarios";

const Retiro =  ({navigation})=> {

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
            marginTop: 10,
          }}
        >
          Introduzca la cantidad a Retirar:
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
            fontWeight: "400",
            color: "green",
            marginBottom: 5,
            fontWeight: "500",
          }}
        >
         Disponible: 120 usdt
        </Text>

        <InputField
          value={Nombre}
          onChangeText={(text) => setNombre(text)}
        />
      

        <CustomButton label={"Solicitar Retiro"} onPress={validardatos} />

        <Text
          style={{
            fontSize: 11,
            color: "#000",
          }}
        >
          * La cantidad minima de retiro es de 10 usdt.{'\n'}{'\n'}
          * Para retirar debe tener al menos 2 Referidos con un deposito confirmado.{'\n'}{'\n'}
          * Los Retiros pueden tardar de 2 a 6 Horas en hacerse efectivo tenga paciencia.{'\n'}{'\n'}
          * Los depositos seran realizados a Wallet registrada en su cuenta.
        </Text>


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
          Wallet USDT TRC20
        </Text>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Image
                source={usdtimg}
                style={{ width: 20, height: 20}}
              /> 
        <Text
          style={{
            fontSize: 11,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
            fontWeight: "500",
          }}
        >
         0x3bE018a933B7d920a5d553DF3473c52b17bfB3A0
        </Text>
        </View>

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
export default Retiro;