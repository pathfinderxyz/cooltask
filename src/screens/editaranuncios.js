import React, { useContext, useState } from "react";
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

import InputField from "./../componentes/InputFliedClaro";
import CustomButton from "./../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import { AuthContext } from "./../context/AuthContext";

const url = "https://apilogistick.iawork.tk/public/anuncios";

const EditarAnuncios = ({ navigation, route }) => {
 
  const [titulo, setTitulo] = useState(route.params?.title);
  const [descripcion, setDescripcion] = useState(route.params?.descripcion);
  const [precio, setPrecio] = useState(route.params?.precio);
  const idanuncio = route.params?.id;

  const [Error, setError] = useState(false);

  const EditarAnuncio = () => {
    console.log(idanuncio);
    console.log(url + "/" + idanuncio);
    axios
      .put(url + "/" + idanuncio, {titulo,descripcion,precio})
      .then((res) => {
        console.log(res.data);
        navigation.navigate("RegistroExitoso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EliminarAnuncio = () => {
    console.log(idanuncio);
    axios
      .delete(url + "/" + idanuncio)
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Misanuncios");
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
          Modifique los datos del anuncio:
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
          Titulo del anuncio
        </Text>
        <TextInput style={styles.InputE}
          defaultValue={route.params?.title}
          onChangeText={(text) => setTitulo(text)}
        />

        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
          }}
        >
          Descripcion
        </Text>

        <TextInput style={styles.InputE}
          defaultValue={route.params?.descripcion}
          onChangeText={(text) => setDescripcion(text)}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#000",
            marginBottom: 5,
          }}
        >
          Presupuesto inicial
        </Text>

        <TextInput style={styles.InputE}
          defaultValue={route.params?.precio}
          onChangeText={(text) => setPrecio(text)}
        />
        <CustomButton label={"Guardar cambios"} onPress={EditarAnuncio} />


        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#000",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          ¿Desea eliminar el anuncio?
        </Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor:'#000',
          marginHorizontal:20,
          borderRadius: 8
    
        }}
        onPress={EliminarAnuncio}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}>
          Eliminar anuncio
        </Text>
        
      </TouchableOpacity>
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



export default EditarAnuncios;
