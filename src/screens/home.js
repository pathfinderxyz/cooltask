import { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  View,
  Text,
  SafeAreaView,
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

/* const NavigatetoDetails = props => {
  props.navigation.navigate('GameDetails');
} */
const url = "https://apilogistick.iawork.tk/public/anuncios";
const urlfiltro = "https://apilogistick.iawork.tk/public/anunciosfiltro";

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

const Home = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedPais, setSelectedPais] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [cargando, setCargando] = useState(true);

  console.log(data);

  const peticionGet = async () => {
    setCargando(true);
      await axios.get(url).then((response) => {
      setData(response.data[0]);
      setCargando(false);
    
    });
  };

  const peticionGetFiltro = () => {
      console.log(selectedCat);
      console.log(selectedPais);
      axios.post(urlfiltro, {selectedCat,selectedPais }).then((res) => {

        setData(res.data);
        
        setModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
        setModalVisible(false);
      });
  };

 console.log(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    await peticionGet();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient

        colors={["#fff"]}
        style={styles.background}
      />

      <ScrollView>
      
              <ListemSaldo
                
                
                onPress={() =>
                  navigation.navigate('detalless', {
                    title: item.nombre,
                    id: item.id,
                    descripcion:item.descripcion,
                    pais:item.pais,
                    ciudad:item.ciudad,
                    precio:item.precio
                  })
                }
              />
            
          
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
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
    backgroundColor: "orange",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
    fontWeight:'bold'
  },
});

export default Home;
