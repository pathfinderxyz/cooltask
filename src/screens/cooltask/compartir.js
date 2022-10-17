import { useState, useContext, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Monedas from './../../assets/botones/monedas.png';
import { AuthContext } from '../../context/AuthContext';
import * as Clipboard from 'expo-clipboard';

const Compartir = ({ navigation }) => {

  const {userInfo} = useContext(AuthContext);
  const [copiedText, setCopiedText] = useState('');

  const micodigo=userInfo[0].micodigoinv;

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(micodigo);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={{ marginHorizontal: 10}}>

     

      <Text style={{
        fontSize: 16,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
      }}>

      </Text>
      
        <View style={styles.listem}>
        <View>
          <Text
            style={{
              color: '#07092c',
              fontSize: 17,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
         Codigo de Invitación
            
          </Text>
          
          </View>

            <Text
              style={{
                color: '#ed8900',
                fontWeight: '700',
                fontSize: 20,
                marginTop: 10,
                marginBottom: 30,
              }}>
             {micodigo}
            </Text>
            <TouchableOpacity onPress={copyToClipboard}
            style={{
              backgroundColor: '#07092c',
              padding: 8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Copiar Link
            </Text>
          </TouchableOpacity>
          
          <Text style={{
        fontSize: 12,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 30,
        borderColor:'#000'
  
      }}>
        Haz que tus amigos se registren usando este codigo y se convertira en tu referido directo.
      </Text>
        </View>

  

    </View>
  );
}

const styles = StyleSheet.create({
  listem: {
   
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems:'center'
  },
});
export default Compartir;