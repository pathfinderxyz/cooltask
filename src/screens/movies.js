import { useState,useEffect,useContext } from 'react';
import { View, Text,TextInput,SafeAreaView ,Button} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListItemBlanco from './../componentes/Listemblanco';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';

const url = "https://apilogistick.iawork.tk/public/anuncios";

const Movies = ({navigation, route}) => {
  const { userInfo } = useContext(AuthContext);
  const idusuario = userInfo[0].id;
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);
  const [datafiltrada, setDataFiltrada] = useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet = async () => {
    await axios.get(url).then(response => {
      setData(response.data);
      setDataFiltrada(response.data);
      console.log(response.data);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  console.log(busqueda);

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=datafiltrada.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().match(terminoBusqueda.toLowerCase())||
         elemento.descripcion.toString().toLowerCase().match(terminoBusqueda.toLowerCase())||
         elemento.pais.toString().toLowerCase().match(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  }

  console.log(datafiltrada);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await peticionGet();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
    <Text style={{
            fontSize: 15,
            color:'#000',
            marginLeft:20,
            marginBottom:20,
            marginTop:25,
            }}>
            Encuentre el servicio que desee:
          </Text>
    <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            
            marginLeft:20,
            marginRight:20
          }}>
          
          <Ionicons
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput 
          value={busqueda}
          placeholder="Búsqueda de servicio"
          onChange={handleChange}
          />
        </View>
       <ScrollView>
        <View style={{flex:1,alignItems:'center',marginTop:20}}>
       {gamesTab == 1 &&
        data.sort((a, b) => b.id - a.id).map(item => (
            <ListItemBlanco
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

          ))}
    </View>
    </ScrollView>
      
        </SafeAreaView>
  );
}
export default Movies;