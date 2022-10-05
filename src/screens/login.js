import React,{useContext,useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import CustomButton from './../componentes/CustomButton';
import InputField from './../componentes/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from './../context/AuthContext';

/* const NavigatetoHome = props => {
  props.navigation.navigate('Home');
} */

const Login = ({navigation})  => {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const {LoginAuth}= useContext(AuthContext);
  const {errorglobal}= useContext(AuthContext);

  const [Error, setError] = useState(false);

  const validardatos = () => {
    if (email == null || password == null) {
      setError(true);
    } else {
      LoginAuth(email,password);
    }
  };

  
  return (
    
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
      
        colors={['#0a1d60', 'transparent']}
        style={styles.background}
      />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 30,
          }}>
          Iniciar sesion
        </Text>
        {Error && (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#f8e44b",
            marginBottom: 30,
          }}
        >
          ¡Error, campos vacios!
        </Text>
      )}

      {errorglobal && (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#f8e44b",
            marginBottom: 30,
          }}
        >
          ¡Error, los datos de usuario son incorrectos!
        </Text>
      )}

        <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
         Correo electronico
        </Text>
        <InputField
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#fff"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          
        />
         <Text
        style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#fff',
            marginBottom: 5,
          }}>
          Contraseña
        </Text>
        <InputField
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#fff"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Olvidaste?"}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        
        <CustomButton label={"Entrar"} onPress={validardatos} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text
          style={{
            color: '#fff'
          }}>¿Eres Nuevo?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeleccionarRegistro')}>
            <Text style={{color: 'orange', fontWeight: '700'}}> Registrate</Text>
          </TouchableOpacity>
        </View>
     
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#07092c',
    paddingHorizontal:25,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
});
export default Login;