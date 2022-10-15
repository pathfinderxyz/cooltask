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
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from '../../context/AuthContext';
import nivel1 from './../../assets/niveles/nivel1.png';
import nivel2 from './../../assets/niveles/nivel2.png';
import nivel3 from './../../assets/niveles/nivel3.png';
import Monedas from './../../assets/botones/monedas.png';
import Req from './../../assets/botones/icon_req.png';
import Retirocash from './../../assets/botones/retiro_cash.png';

const AgenteInterno = ({ navigation }) => {
  
  const [data, setData] = useState([]);
  
  const [cargando, setCargando] = useState(true);

  const { userInfo } = useContext(AuthContext);

  console.log(data);

  return (
    <ScrollView>
    <View style={styles.container}>
      
    <View style={styles.listemguia}>
    <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Requisitos
          </Text>
       
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 12,
              
              }}>
              Depositar 20 usdt. 
                      
            </Text>
            <Image
                source={Req}
                style={{ width: 70, height: 70, marginTop:-32 }}
              />

          </View>

       </View>

       <View style={styles.listemguia}>
    <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Ganancias
          </Text>
       
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 12,
               
              
              }}>
               
               Genera 10% diario de tu inversion.{'\n'}
               Ganara 25% de la recarga de su referido 
            </Text>
            <Image
                source={Monedas}
                style={{ width: 70, height: 70, marginTop:-32 }}
              />

          </View>

       </View>

       <View style={styles.listemguia}>
    <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Retiros
          </Text>
       
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 12,
              
              }}>
             Siempre podras retirar.         
            </Text>
            <Image
                source={Retirocash}
                style={{ width: 70, height: 70, marginTop:-32 }}
              />

          </View>
         

       </View>
       <View style={styles.listemboton}>
       <TouchableOpacity onPress={() =>navigation.navigate('Deposito')}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
        <Text
          style={{
            color: '#fff',
            fontSize: 13,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Convertirme en Agente externo
        </Text>
        

        <MaterialIcons name="arrow-forward-ios" size={18} color="#fff" />
      </TouchableOpacity>
      </View>
    
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:11,
  },
  listemguia: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  listemboton: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#fd8029',
    padding: 10,
    borderRadius: 15,
  }
});

export default AgenteInterno ;
