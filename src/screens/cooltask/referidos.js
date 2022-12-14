import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
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

const Referidos = ({ navigation }) => {
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
      <StatusBar style="Light" backgroundColor="#0a1d60" />
    <View  style={{ marginHorizontal: 10, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginLeft: 16,
            marginRight: 14,
            fontWeight: "bold",
          }}
        >
          Mi Equipo
        </Text>
     
        <Text
          style={{
            fontSize: 14,
            color: "#000",
            marginLeft: 14,
            marginRight: 16,
            fontWeight: "bold",
          }}
        >
          Integrantes: {data.length}
        </Text>
      </View>

      <View style={styles.listemboton}>
      <TouchableOpacity onPress={() =>navigation.navigate('concurso')}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Concurso de referidos
        </Text>
        

        <MaterialIcons name="arrow-forward-ios" size={18} color="#fff" />
      </TouchableOpacity>
      </View>
      
      {Cargando ? (
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginLeft: 16,
            marginRight: 14,
            marginTop:30,
            fontWeight: "bold",
          }}
        >
          Cargando....
        </Text>
      ) : (
        data.map((item) => (
          <View key={item} style={styles.listem}>
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
                Depositos: {item.sumadedepositos} USDT
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                {item.calificacion}
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
                <Ionicons name="person" color="green" size={16} />{" "}
                {item.username}
              </Text>
            </View>
          </View>
        ))
      )}
      
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
export default Referidos;
