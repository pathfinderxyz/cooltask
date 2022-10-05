import { useState,useEffect,useContext } from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListItem from './../componentes/ListItem';
import { freeGames, paidGames, promo, sliderData } from './../model/data';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';

const NavigatetoHome = props => {
    props.navigation.navigate('Home');
}

const url = "https://apilogistick.iawork.tk/public/anuncios";

const AnunciosContratados = ({navigation, route}) => {
  const { userInfo } = useContext(AuthContext);
  const idusuario = userInfo[0].id;
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(url + "/" + idusuario).then(response => {
      setData(response.data);
      console.log(response.data);
    })
  }

  console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <ScrollView>
    <View style={{flex:1,alignItems:'center',marginTop:20}}>
       {gamesTab == 1 &&
        data.sort((a, b) => b.id - a.id).map(item => (
            <ListItem
              key={item.id}
              title={item.nombre}
              subTitle={item.descripcion}
              pais={item.pais}
              ciudad={item.ciudad}
              price={item.precio}
              onPress={() =>({
                  title: item.title,
                  id: item.id,
                })
              }
            />

          ))}
    </View>
    </ScrollView>
  
  );
}
export default AnunciosContratados;