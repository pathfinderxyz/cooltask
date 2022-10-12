import { useState, useContext, useEffect } from "react";
import {
  Alert,
  Modal,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelectList from "react-native-dropdown-select-list";
import Ionicons from "@expo/vector-icons/Ionicons";
import Compartir from './../../assets/botones/boton_compartir.png';
import Billetera from './../../assets/botones/billeteraicono.png';
import Retiro from './../../assets/botones/retiro.png';
import Deposito from './../../assets/botones/deposito.png';
import Guia from './../../assets/botones/guia-icono.png';
import Monedas from './../../assets/botones/monedas.png';
import Nivel1 from './../../assets/niveles/nivel1.png';
import { AuthContext } from '../../context/AuthContext';


const Micuenta = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedPais, setSelectedPais] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [cargando, setCargando] = useState(true);

  const { userInfo } = useContext(AuthContext);
  const {Logout}= useContext(AuthContext);

  console.log(data);

  return (
    <ScrollView>
    <View style={styles.container}>
       
        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Usuario: {userInfo[0].nombre}
            
          </Text>
          <Image
                source={Nivel1}
                style={{ width: 60, height: 60 }}
              />
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginTop:-22
            }}>
            Saldo
          </Text>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>

            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 27,
              }}>
              <Image
                source={Monedas}
                style={{ width: 30, height: 30 }}
              />$120.00
            </Text>
            
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 13,
                marginTop: 11,
              }}>
              Superior
            </Text>
            
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              marginTop:10
            
            }}>
            Correo: tamayo@gmail.com{'\n'}
            Codigo de invitacion: QWWDQE <Ionicons name="copy" color='white' size={16} />{'\n'}
            Referidos: 0
          </Text>
          

        </View>
  
        <View style={styles.listemguia}>
        <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Miwallet')}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Mi Wallet
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="#898484" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Descargarapp')}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Descargar App
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="#898484" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Mipass')}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Mi Contraseña
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="#898484" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#d7d6d6',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Soporteapp')}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Soporte
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="#898484" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Logout()}}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
         Cerrar sesion
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="#898484" />
      </TouchableOpacity>
      </View>


       
        
    
      
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:21,
  },

  listem: {
   
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#16c25e',
    padding: 20,
    borderRadius: 15,
  },
  listemvipbase: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#fef1ea',
    padding: 20,
    borderRadius: 15,
  },
  listemguia: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  botones: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 25,
    backgroundColor: '#176793',
    alignItems: 'center',
    borderRadius: 15,
  },
  listemvip: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#000',
   
    borderRadius: 15,
  },
});

export default Micuenta;
