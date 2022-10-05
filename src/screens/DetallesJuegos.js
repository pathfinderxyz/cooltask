import { useState } from 'react';
import { View, Text } from 'react-native'
import ListItem from './../componentes/ListItem';
import { freeGames, paidGames, promo, sliderData } from './../model/data';

const GameDetailsScreen = ({navigation, route}) => {
  const [gamesTab, setGamesTab] = useState(1);
  return (
    <View style={{flex:1,alignItems:'center',marginTop:20}}>
       {gamesTab == 1 &&
          promo.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('Chat', {
                  title: item.title,
                  id: item.id,
                })
              }
            />

          ))}
          <Text style={{
            fontSize: 14,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15,
            }}>
            Si desea saber el precio directamente puedes adquirir una membresia premium por 1 mes.
          </Text>
          <Text style={{
            fontSize: 14,
            color:'#000',
            marginLeft:14,
            marginRight:14,
            marginBottom:15
            }}>
           Usuario: Superman2022, Nombre: Pedro Jimenez
          </Text>
      
    </View>
  )
}

export default GameDetailsScreen;
