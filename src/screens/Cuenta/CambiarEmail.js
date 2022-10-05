import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
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

const url = "https://apilogistick.iawork.tk/public/usuarios";

const CambiarEmail =  ({navigation})=> {

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
      <View showsVerticalScrollIndicator={false} style={styles.container}>


        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          Introduzca los datos a modificar:
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
            fontSize: 14,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
          }}
        >
         Nombre completo
        </Text>

        <InputField
          value={Nombre}
          onChangeText={(text) => setNombre(text)}
        />

        <CustomButton label={"Editar nombre"} onPress={validardatos} />


       

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
});
export default CambiarEmail;