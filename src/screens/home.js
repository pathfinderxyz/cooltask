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
import CustomSwitch from "./../componentes/CustomSwitch";
import ListItemHome from "./../componentes/ListemHome";
import { freeGames, paidGames, promo, sliderData } from "./../model/data";
import { LinearGradient } from "expo-linear-gradient";

import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelectList from "react-native-dropdown-select-list";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListemSaldo from "../componentes/ListemSaldo";
import { windowWidth } from './../utils/Dimensions';
import Compartir from './../assets/botones/boton_compartir.png';
import Billetera from './../assets/botones/billeteraicono.png';
import Retiro from './../assets/botones/retiro.png';
import Deposito from './../assets/botones/deposito.png';
import Guia from './../assets/botones/guia-icono.png';
import Monedas from './../assets/botones/monedas.png';
import Nivel3 from './../assets/niveles/nivel3.png';
import Nivel2 from './../assets/niveles/nivel2.png';
import Nivel1 from './../assets/niveles/nivel1.png';
import nivel4 from './../assets/niveles/nivel4.png';
import { AuthContext } from '../context/AuthContext';

/* const NavigatetoDetails = props => {
  props.navigation.navigate('GameDetails');
} */
const url = "https://api.cooltask.homes/public/usuarios";

const datacategoria = [
  { key: "todos", value: "todos" },
  { key: "Mensajero", value: "Mensajero" },
  { key: "Entregas", value: "Entrega de paquetes" },
  { key: "Mudanzas", value: "Mudanzas" },
  { key: "Transporte", value: "Transporte de carga" },
  { key: "apoyologistico.", value: "Personal de apoyo logistico." },
  { key: "Personallimpieza", value: "Personal de limpieza" },
  { key: "Domiciliario", value: "Domiciliario" }
];

const datapais = [
  { key: "todos", value: "todos" },
  { key: "Argentina", value: "Argentina" },
  { key: "Chile", value: "Chile" },
  { key: "Colombia", value: "Colombia" },
  { key: "Mexico", value: "Mexico" },
  { key: "Paraguay", value: "Paraguay" },
  { key: "Peru", value: "Peru" },
  { key: "Uruguay", value: "Uruguay" },
  { key: "Venezuela", value: "Venezuela" }
];

const Homeapp = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedPais, setSelectedPais] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [recargar, setRecargar] = useState(false);

  const [saldo, setSaldo] = useState(0);

  const {userInfo} = useContext(AuthContext);
  const iduser= userInfo[0].id;

  const peticionGet = async () => {
    await axios.get(url + "/" + iduser).then((response) => {
      setData(response.data[0]);
      setSaldo(response.data[0].Monto);
    });
  };

  setTimeout(()=>{
     setRecargar(!recargar);
},2000);

 

  useEffect(() => {
   peticionGet();
  }, [recargar]);

  const saldo2 = saldo*1;
  const saldo3 = saldo2.toFixed(2);

  return (
    <ScrollView>
    <View style={styles.container}>
       <View style={styles.container2}>
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
            {data.nombre}
            
          </Text>
          {data.calificacion=="Agente Externo" &&
          <Image
                source={nivel4}
                style={{ width: 60, height: 60 }}
              />
          }  
          {data.calificacion=="Agente Interno" &&
          <Image
                source={Nivel3}
                style={{ width: 60, height: 60 }}
              />
          } 
           {data.calificacion=="Agente Vip" &&
          <Image
                source={Nivel2}
                style={{ width: 60, height: 60 }}
              />
          } 
          {data.calificacion=="Agente Superior" &&
          <Image
                source={Nivel1}
                style={{ width: 60, height: 60 }}
              />
          } 
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
              />${saldo3}
            
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 13,
                marginTop: 11,
              }}>
              {data.calificacion}
            </Text>
          </View>

        </View>
        </View>
        <View style={styles.botones}>
          <View style={{
            flexDirection: "row",
            paddingVertical: 14,
          }}>
            <View
              style={{
                fontWeight: 'bold',
                fontSize: 19,
                marginTop: 9,
                color: '#fff',
                padding: 5,
                margin: 7,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() =>navigation.navigate('Compartir')}>
              <Image
                source={Compartir}
                style={{ width: 51, height: 51 }}
              />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 4,
                  color: '#fff',
                }}>
                Invitar
              </Text>
            </View>
            <View
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 19,
                marginTop: 9,
                padding: 5,
                margin: 7,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',

              }}>
                <TouchableOpacity onPress={() =>navigation.navigate('Billetera')}>
              <Image
                source={Billetera}
                style={{ width: 50, height: 50 }}
              />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 4,
                  color: '#fff',
                }}>
                Billetera
              </Text>
            </View>
            <View
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 19,
                marginTop: 9,
                padding: 5,
                margin: 7,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <TouchableOpacity onPress={() =>navigation.navigate('Retiro')}>
              <Image
                source={Retiro}
                style={{ width: 50, height: 50 }}
              /></TouchableOpacity>
              <Text
                style={{
                  marginTop: 4,
                  color: '#fff',
                }}>
                Retiro
              </Text>
            </View>
            <View
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 19,
                marginTop: 9,
                padding: 5,
                margin: 7,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <TouchableOpacity onPress={() =>navigation.navigate('Deposito')}>
              <Image
                source={Deposito}
                style={{ width: 50, height: 50 }}
              /></TouchableOpacity>
              <Text
                style={{
                  marginTop: 4,
                  color: '#fff',
                }}>
                Deposito
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.listemguia}>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Guia para principiantes
          </Text>


          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 12,
                marginTop: 9,
              }}>
              Te explicamos todas las diferentes {'\n'}formas de ganar dinero{'\n'} con CoolTask.{'\n'}{'\n'}
              <TouchableOpacity onPress={() =>navigation.navigate('Guia')}
               style={{
                backgroundColor: '#07092c',
                padding: 8,
                width: 100,
                borderRadius: 7,
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 14,
                }}>

                  Ver
                </Text>
              </TouchableOpacity>
            </Text>

            <Image
              source={Guia}
              style={{ width: 110, height: 110 }}
            />
          </View>

        </View>

        <Text
          style={{
            fontSize: 18,
            color: "#000",
            padding: 14,
            marginHorizontal: 20,
            fontWeight: 'bold',
          }}
        >
          Calificaciones
          
        </Text>
        
        <View style={styles.listemvipbase}>
        
        
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
                backgroundColor:'#fff',
                padding:10,
                borderRadius:10,
                paddingHorizontal:25
                
              }}>
              Agente externo{'\n'}
              <Image
                source={Monedas}
                style={{ width: 40, height: 40 }}
              />{'\n'}{'\n'}
               <Text style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                  0% Diario{'\n'}
                </Text>
              <TouchableOpacity onPress={() =>navigation.navigate('Agentes')}
              style={{
                backgroundColor: '#fd8029',
                padding: 7,
                width: 100,
                borderRadius: 7,
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                  Unirme
                </Text>
              </TouchableOpacity>
            </Text>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
                backgroundColor:'#fff',
                padding:10,
                borderRadius:10,
                paddingHorizontal:25
              
              }}>
              Agente interno{'\n'}
              <Image
                source={Monedas}
                style={{ width: 40, height: 40 }}
              />{'\n'}{'\n'}
               <Text style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                  10% Diario{'\n'}
                </Text>
              <TouchableOpacity onPress={() =>navigation.navigate('Agenteinterno')}
              style={{
                backgroundColor: '#fd8029',
                padding: 7,
                width: 100,
                borderRadius: 7,
              }}>
                
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                  Unirme
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
                backgroundColor:'#fff',
                padding:10,
                borderRadius:10,
                paddingHorizontal:25,
                marginTop:20
              }}>
              Agente VIP{'\n'}
              <Image
                source={Monedas}
                style={{ width: 40, height: 40 }}
              />{'\n'}{'\n'}
               <Text style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                  15% Diario{'\n'}
                </Text>
              <TouchableOpacity onPress={() =>navigation.navigate('Agentevip')}
               style={{
                backgroundColor: '#fd8029',
                padding: 7,
                width: 100,
                borderRadius: 7,
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                  Unirme
                </Text>
              </TouchableOpacity>
            </Text>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
                backgroundColor:'#fff',
                padding:10,
                borderRadius:10,
                paddingHorizontal:25,
                marginTop:20
              }}>
              Agente Superior{'\n'}
              <Image
                source={Monedas}
                style={{ width: 40, height: 40 }}
              />{'\n'}{'\n'}
               <Text style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                  20% Diario {'\n'}+30%xRef{'\n'}
                 
                </Text>
              <TouchableOpacity onPress={() =>navigation.navigate('Agentesuperior')}
              style={{
                backgroundColor: '#fd8029',
                padding: 7,
                width: 100,
                borderRadius: 7,
              }}>
                
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                  Unirme
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

        </View>

      
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  container2: {
    marginTop:-4,
    justifyContent: "center",
    backgroundColor: '#07092c',
    paddingBottom:7
  },
  listem: {
    marginTop: 20,
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

export default Homeapp;
