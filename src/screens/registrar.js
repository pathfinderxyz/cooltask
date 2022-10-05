import React, { useState } from "react";
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
import Home from "./home";

import InputField from "./../componentes/InputField";
import CustomButton from "./../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";

const url = "https://apilogistick.iawork.tk/public/usuarios";

const Registrar = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const [nombre, setNombre] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [pais, setPais] = useState(null);
  const [pass, setPass] = useState(null);
  const rol = "cliente";

  const data = [
    { key: "Argentina", value: "Argentina" },
    { key: "Chile", value: "Chile" },
    { key: "Colombia", value: "Colombia" },
    { key: "Mexico", value: "Mexico" },
    { key: "Paraguay", value: "Paraguay" },
    { key: "Peru", value: "Peru" },
    { key: "Uruguay", value: "Uruguay" },
    { key: "Venezuela", value: "Venezuela" }
  ];

  const [Error, setError] = useState(false);

  const validardatos = () => {
    if (nombre == null || correo == null || selected == null || pass == null ) {
      setError(true);
    } else {
      RegistrarCliente();
    }
  };

  const RegistrarCliente = () => {
    axios
      .post(url, { nombre, correo, selected, pass, rol })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("GraciasRegistrar");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <LinearGradient
        // Background Linear Gradient

        colors={["#0a1d60", "transparent"]}
        style={styles.background}
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
          color: "#fff",
          marginBottom: 30,
        }}
      >
        Cliente
      </Text>
      {Error && (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#f8e44b",
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
          color: "#fff",
          marginBottom: 5,
        }}
      >
        Nombre completo
      </Text>

      <InputField
        icon={
          <Ionicons
            name="person-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
        }
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#fff",
          marginBottom: 5,
        }}
      >
        Correo electronico
      </Text>
      <InputField
        icon={
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
        }
        keyboardType="email-address"
        value={correo}
        onChangeText={(text) => setCorreo(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#fff",
          marginBottom: 5,
        }}
      >
        País
      </Text>

      <SelectList
        setSelected={setSelected}
        data={data}
        searchPlaceholder="Seleccione"
        arrowicon={<Ionicons name="chevron-down" size={20} color={"#fff"} />}
        searchicon={
          <Ionicons name="ios-lock-closed-outline" size={20} color={"#fff"} />
        }
        search={false}
        boxStyles={{
          borderRadius: 0,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderColor: "#fff",
          marginBottom: 15,
        }} //override default styles
        inputStyles={{ color: "#fff" }}
        dropdownTextStyles={{ color: "#fff" }}
        defaultOption={{ key: "0", value: "Seleccione un pais" }} //default selected option
      />

      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#fff",
          marginBottom: 5,
        }}
      >
        Contraseña
      </Text>
      <InputField
        icon={
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
        }
        inputType="password"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#fff",
          marginBottom: 5,
        }}
      >
        Confirmar Contraseña
      </Text>
      <InputField
        icon={
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
        }
        inputType="password"
      />
      <CustomButton label={"Registrar"} onPress={validardatos} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          ¿Ya esta registrado?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "orange", fontWeight: "700" }}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#07092c",
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
export default Registrar;
