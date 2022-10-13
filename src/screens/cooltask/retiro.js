import React, { useContext, useState,useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
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

const url = "https://api.cooltask.homes/public/usuarios";
const urlretiros = "https://api.cooltask.homes/public/retiros";

const Retiro =  ({navigation})=> {

  const { userInfo } = useContext(AuthContext);

  const [Retiromonto, setRetiromonto] = useState(null);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const usuario = userInfo[0].id;

  const [Error, setError] = useState(false);
  const [Errorcantidad, setErrorcantidad] = useState(false);

  const validardatos = () => {
    setError(false);
    setErrorcantidad(false);
    if (Retiromonto !== null) {
      if(Retiromonto > data.Monto || Retiromonto < 10 ){
        setErrorcantidad(true);
      }else{
        setModalVisible(true);
      }
    } else {
      setError(true);
    }
  };

  const Procesaretiro = () => {
    axios.post(urlretiros, {usuario,Retiromonto}).then((res) => {
      console.log('Retiro procesado');
      peticionGet();
      setModalVisible(false);
      navigation.navigate("Confirmarretiro");
    })
    .catch((err) => {
      console.log(err);
      setModalVisible(false);
    });
  };


  const peticionGet = async () => {
    await axios.get(url + "/" + usuario).then((response) => {
      setData(response.data[0]);
    });
  };
  
  useEffect(async() => {
    await peticionGet();
  }, []);

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
              fontSize: 13,
              fontWeight: "500",
              color: "red",
              marginBottom: 30,
            }}
          >
            ¡Error, especifique un monto!
          </Text>
        )}
        {Errorcantidad && (
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "red",
              marginBottom: 30,
            }}
          >
            ¡Error, Usted no posee esa cantidad disponible o no llega al minimo!
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
         Disponible: {data.Monto} usdt
        </Text>

        <InputField
          value={Retiromonto}
          onChangeText={(text) => setRetiromonto(text)}
        />
      

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

            Solicitar retiro
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
          Instrucciones para retirar:
        </Text>

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
          }}
        >
          Wallet Vinculada
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
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                ¿Desea confirmar el retiro a la direccion wallet vinculada?
              </Text>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Revisar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={Procesaretiro}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin:5,
  },
  
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#000",
  },
  buttonfiltrar: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 50,
    paddingHorizontal:10,
    textAlign: "center",
    fontSize: 15,
    fontWeight:'bold'
  },
});
export default Retiro;