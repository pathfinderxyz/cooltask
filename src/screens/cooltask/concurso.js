import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Monedas from "./../../assets/botones/monedas.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const url = "https://api.cooltask.homes/public/referidos";

const Concurso = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);
  const [Cargando, setCargando] = useState(true);

  const { userInfo } = useContext(AuthContext);
  const micodigounico= userInfo[0].micodigoinv;

  const peticionGet = async () => {
    setCargando(true);
    await axios.get(url + "/" + micodigounico).then((response) => {
      setData(response.data);
      setCargando(false);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <ScrollView>
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
    <Text style={{
            fontSize: 13,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
          Con motivo del lanzamiento de nuestra plataforma, tendremos un concurso 
          donde se recompensara a los 5 usuarios con mas referidos recargados.{'\n'}{'\n'}
          El concurso estara vigente hasta el 21-10-2022 , el ganador se llevara 10usdt por cada referido 
          que sea Agente Interno.{'\n'}{'\n'}
          Todos los dias despues del reinicio del servidor actualizaremos la tabla de posiciones.
      </Text>


          <View style={styles.listem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                N# 1
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Referidos: 4
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
                <Ionicons name="person" color="orange" size={16} />{" "}
                JULES
              </Text>
            </View>
          </View>

          <View style={styles.listem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                N# 2
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Referidos: 3
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
                <Ionicons name="person" color="orange" size={16} />{" "}
                PATHFINDERXYZ
              </Text>
            </View>
          </View>

          <View style={styles.listem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                N# 3
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Referidos: 3
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
                <Ionicons name="person" color="orange" size={16} />{" "}
                ALEX CISNEROS
              </Text>
            </View>
          </View>

          <View style={styles.listem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                N# 4
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Referidos: 3
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
                <Ionicons name="person" color="orange" size={16} />{" "}
                ROXY
              </Text>
            </View>
          </View>

          <View style={styles.listem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#07092c",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                N# 5
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Referidos: 2
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
                <Ionicons name="person" color="orange" size={16} />{" "}
                BLACKJAM24
              </Text>
            </View>
          </View>
     
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listem: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  listemboton: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fd8029',
    padding: 10,
    borderRadius: 15,
  }
});
export default Concurso;
