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
import Monedas from './../../assets/botones/monedas.png';
import { AuthContext } from '../../context/AuthContext';
import nivel1 from './../../assets/niveles/nivel1.png';
import nivel2 from './../../assets/niveles/nivel2.png';
import nivel3 from './../../assets/niveles/nivel3.png';

const Guia = ({ navigation }) => {
  
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
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Agente externo
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
              Sera aquel que se registro, No {'\n'}
              podra retirar. ni obtener recompensas,{'\n'}
              por referidos que recarguen.
              
            </Text>

          
          </View>

       </View>
       <View style={styles.listemguia}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Agente Interno
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
              Sera aquel que se registro y recargo{'\n'}
              al menos 20 usdt, ganara diario el 10%{'\n'}
              de su inversion y siempre podras retirar.
              
            </Text>

            <Image
              source={nivel3}
              style={{ width: 80, height: 80 }}
            />
          </View>

       </View>
       <View style={styles.listemguia}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Agente VIP
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
              Sera aquel que tenga minimo 500 usdt{'\n'}
               invertidos entre su saldo y el de sus{'\n'}
                referidos de Nivel 1, ganara el 15%{'\n'}
                de su inversion, ganara el 30% de{'\n'}
               la inversion de sus referidos{'\n'}
              y siempre podras retirar.
              
            </Text>

            <Image
              source={nivel2}
              style={{ width: 80, height: 80 }}
            />
          </View>

       </View>
       <View style={styles.listemguia}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Agente Superior
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
              Esta Calificacion solo se obtiene{'\n'}
              cuando eres elegido para formar{'\n'}
              parte del equipo de trabajo de {'\n'}
              CoolTask.Puedes optar serlo luego de {'\n'}
              que eres Agente VIP, No a todos los {'\n'}
              aceptan  aunque ya sean agentes VIP, {'\n'}
              ganara el 20%  diario de su inversion  {'\n'}
              y siempre podra retirar.{'\n'}{'\n'}
              Ademas ganara el 30% de la  {'\n'}
              inversion de sus referidos cuando  {'\n'} 
              tenga mas de 10 referido.
              
            </Text>

            <Image
              source={nivel1}
              style={{ width: 80, height: 80 }}
            />
          </View>

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
  }
});

export default Guia;
