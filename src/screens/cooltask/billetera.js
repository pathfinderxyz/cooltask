import React, { useContext, useState,useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import usdtimg from './../../assets/botones/usdt.png';
import { AuthContext } from './../../context/AuthContext';
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";

const url = "https://api.cooltask.homes/public/usuarios";
const urldepositos = "https://api.cooltask.homes/public/depositos";
const urlretiros = "https://api.cooltask.homes/public/retiros";

const Billetera = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [dataretiro, setDataretiro] = useState([]);
  const [datadeposito, setDatadeposito] = useState([]);
  const [Cargando, setCargando] = useState(true);

  const [saldo, setSaldo] = useState(0);
  const [sumdepositos, setSumdepositos] = useState(0);
  const [ganancias, setGanancias] = useState(0);

  const usuario = userInfo[0].id;

  const peticionGet = async () => {
    await axios.get(url + "/" + usuario).then((response) => {
      setData(response.data[0]);
      setSaldo(response.data[0].Monto);
      setSumdepositos(response.data[0].sumadedepositos);
      setGanancias(response.data[0].ganancias);
    });
  };

  const peticionGetDepositos = async () => {
    setCargando(true);
    await axios.get(urldepositos + "/" + usuario).then((response) => {
      setDatadeposito(response.data);
      setCargando(false);
    });
  };

  const peticionGetRetiros = async () => {
    setCargando(true);
    await axios.get(urlretiros + "/" + usuario).then((response) => {
      setDataretiro(response.data);
      setCargando(false);
    });
  };


  useEffect(() => {
    peticionGet();
    peticionGetDepositos();
    peticionGetRetiros();
  }, []);

  const saldo2 = saldo*1;
  const saldo3 = saldo2.toFixed(2);

  const sumdepositos2 = sumdepositos*1;
  const sumdepositos3 = sumdepositos2.toFixed(2);

  const ganancias2 = ganancias*1;
  const ganancias3 = ganancias2.toFixed(2);

  return (
    <ScrollView>
    <View style={{ marginHorizontal: 10}}>

     

      <Text style={{
        fontSize: 16,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
      }}>

      </Text>
      
        <View style={styles.listem}>
        <View>
          <Text
            style={{
              color: '#07092c',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
          Acumulado
            
          </Text>
           
          </View>
             <Image
                source={usdtimg}
                style={{ width: 60, height: 60,marginBottom:15}}
              />
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: '800',
                fontSize: 31,
                marginBottom: 20,
              }}>
              ${saldo3} USDT
            </Text>
         
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginBottom: 10,
                  paddingHorizontal:20
                }}
              >
                Depositos: {sumdepositos3} USDT
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginBottom: 10,
                  paddingHorizontal:20
                }}
              >
                Ganancias: {ganancias3} USDT
              </Text>
          
            <TouchableOpacity onPress={() =>navigation.navigate('Retiro')}
            style={{
              backgroundColor: '#07092c',
              padding: 8,
              width: 200,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Retirar
            </Text>
          </TouchableOpacity>
          
          <Text style={{
        fontSize: 12,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 30,
        borderColor:'#000'
  
      }}>
        El minimo de retiro para los fondos es de 10$.
      </Text>
        </View>
       
        <Text
          style={{
            fontSize: 17,
            color: "#000",
            padding: 14,
            marginHorizontal: 20,
            fontWeight: 'bold',
          }}
        >
          Historial de operaciones
          
        </Text>
        {Cargando ? (
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginLeft: 20,
            marginRight: 14,
            marginTop:30,
            fontWeight: "bold",
          }}
        >
          Cargando....
        </Text>
      ) : (
        datadeposito.map((item) => (
          <View style={styles.listemhistorial}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                 {item.fecha} {item.hora}
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Monto: {item.cantidad} USDT
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                <Ionicons name="cash-outline" color="green" size={16} />{" "}
                Deposito {item.status}
              </Text>
            </View>
          </View>
        ))
      )}

      {Cargando ? (
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginLeft: 20,
            marginRight: 14,
            marginTop:30,
            fontWeight: "bold",
          }}
        >
          Cargando....
        </Text>
      ) : (
        dataretiro.map((itemr) => (
          <View style={styles.listemhistorial}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                 {itemr.fecha} {itemr.hora}
              </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Monto: {itemr.cantidad} USDT
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                <Ionicons name="cash-outline" color="red" size={16} />{" "}
                Retiro {itemr.status}
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listem: {
   
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems:'center'
  },
  listemhistorial: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
});
export default Billetera;