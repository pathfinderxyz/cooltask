import React, { useContext, useState,useEffect } from "react";
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

import InputField from "./../../../componentes/InputFliedClaro";
import CustomButton from "./../../../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import { AuthContext } from "./../../../context/AuthContext";

const url = "https://api.cooltask.homes/public/usuarioclave";
const urlinfouser = "https://api.cooltask.homes/public/usuarios";

const Mipass= ({ navigation, route }) => {
 
  const [pass, setPass] = useState(null);
  const [data, setData] = useState([]);

  const { userInfo } = useContext(AuthContext);
  const idusuario = userInfo[0].id;

  const [Error, setError] = useState(false);

  const validardatos = () => {
   
    if (pass == null) {
      setError(true);
    } else {
      EditarPass();
    }
  };


  const EditarPass = () => {
   
    axios
      .put(url + "/" + idusuario, {pass})
      .then((res) => {
     
        navigation.navigate("Clavecambiada");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const peticionGet = async () => {
    await axios.get(urlinfouser+'/'+idusuario).then((response) => {
      setData(response.data[0]);
    });
  };

useEffect(() => {
   peticionGet();
}, []);


  return (
    <ScrollView>
      <View showsVerticalScrollIndicator={false} style={styles.container}>
        <Text
          style={{
            fontSize: 14,
            color: "#000",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
         Puede modificar su contraseña y luego presione Actualizar contraseña.
        </Text>
        {Error && (
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "red",
              marginBottom: 30,
            }}
          >
            ¡Error, la nueva contraseña no puede estar vacia!
          </Text>
        )}
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
          }}
        >
         Contraseña registrada
        </Text>
        <TextInput style={styles.InputE}
          editable={false}
          value={data.password}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
          }}
        >
         Nueva Contraseña
        </Text>
        <TextInput style={styles.InputE}
          value={pass}
          onChangeText={(text) => setPass(text)}
        />

     
        <CustomButton label={"Actualizar contraseña"} onPress={validardatos} />


    
      </View>
     
    </ScrollView>
  );
};
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
  InputE:{
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingBottom: 10,
    marginBottom: 25,
    borderRadius: 5,
    flex: 1, 
    paddingVertical:4,
    fontSize:15,
    paddingHorizontal:10,
    paddingTop:10
  },
  botoneliminar: {
    backgroundColor:'000'
  },
});



export default Mipass;
