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
      setData(response.data);
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

        colors={["#0a1d60", "transparent"]}
        style={styles.background}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          marginTop: 38,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={27}
            color="#fff"
            style={{ padding: 14 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 19,
            color: "#fff",
            padding: 14,
          }}
        >
          Inicio
        </Text>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons
            name="filter-alt"
            size={24}
            color="#fff"
            style={{ padding: 14 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            color: "#fff",
            padding: 14,
          }}
        >
         Anuncios disponibles
        </Text>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            marginLeft: 14,
            marginBottom: 20,
          }}
        >
          Encuentre el servicio que desee
        </Text>
        <TouchableOpacity onPress={peticionGet}>
          <Ionicons
            name="reload"
            size={19}
            color="#fff"
            style={{ paddingRight: 17 }}
          />
        </TouchableOpacity>
        </View>
        {cargando ===true ? 
          <Text
          style={{
            fontSize: 18,
            color: "#fff",
            padding: 14,
            textAlign:"center"
          }}
        >
         Cargando...
        </Text>
        :
        gamesTab == 1 &&
          data
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <ListItemHome
                key={item.id}
                title={item.nombre}
                subTitle={item.descripcion}
                pais={item.pais}
                ciudad={item.ciudad}
                price={item.precio}
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
            ))
            }
      </ScrollView>

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
                Filtre la categoria del servicio y el pais que busca:
              </Text>

              <SelectList
                setSelected={setSelectedCat}
                data={datacategoria}
                searchPlaceholder="Seleccione"
                arrowicon={
                  <Ionicons name="chevron-down" size={16} color={"#000"} />
                }
                searchicon={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color={"#000"}
                  />
                }
                search={false}
                boxStyles={{
                  borderRadius: 5,
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                  borderColor: "#ccc",
                  marginBottom: 15,
                }} //override default styles
                inputStyles={{ color: "#000" }}
                dropdownTextStyles={{ color: "#000" }}
                defaultOption={{ key: "todos", value: "Categoria del servicio" }} //default selected option
              />

              <SelectList
                setSelected={setSelectedPais}
                data={datapais}
                searchPlaceholder="Seleccione"
                arrowicon={
                  <Ionicons name="chevron-down" size={16} color={"#000"} />
                }
                searchicon={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color={"#000"}
                  />
                }
                search={false}
                boxStyles={{
                  borderRadius: 5,
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                  borderColor: "#ccc",
                  marginBottom: 15,
                }} //override default styles
                inputStyles={{ color: "#000" }}
                dropdownTextStyles={{ color: "#000" }}
                defaultOption={{ key: "todos", value: "Seleccione un pais" }} //default selected option
              />

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={peticionGetFiltro}
              >
                <Text style={styles.textStyle}>filtrar</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#07092c",
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
