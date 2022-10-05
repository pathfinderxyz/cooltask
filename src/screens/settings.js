import { useState,useEffect,useContext } from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListItem from './../componentes/ListItem';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

const NavigatetoHome = props => {
    props.navigation.navigate('Home');
}

const url = "https://apilogistick.iawork.tk/public/anuncios";

const Config = ({navigation, route}) => {
  const { userInfo } = useContext(AuthContext);
  const idusuario = userInfo[0].id;
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);

  const [cargando, setCargando] = useState(true);

  const peticionGet = async () => {
      setCargando(true);
      await axios.get(url + "/" + idusuario).then(response => {
      setData(response.data);
      setCargando(false);
    
    })
  }

 console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <ScrollView>
     <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 25,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={peticionGet}>
        <Text
          style={{
            fontSize: 15,
            fontWeight:'bold',
            color: "#000",
            
          }}
        >Actualizar&nbsp;
        <Ionicons
            name="reload"
            size={14}
            color="#000"
          />
          
        </Text>
          
        </TouchableOpacity>
      </View>
    <View style={{flex:1,alignItems:'center',marginTop:20}}>

    {cargando ===true ? 
          <Text
          style={{
            fontSize: 18,
            color: "#000",
            padding: 14,
            textAlign:"center"
          }}
        >
         Cargando...
        </Text>
        :
      gamesTab == 1 &&
        data.sort((a, b) => b.id - a.id).map(item => (
            <ListItem
              key={item.id}
              title={item.nombre}
              subTitle={item.descripcion}
              pais={item.pais}
              ciudad={item.ciudad}
              price={item.precio}
              onPress={() =>
                  navigation.navigate('EditarAnuncio', {
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
  
  );
}
export default Config;