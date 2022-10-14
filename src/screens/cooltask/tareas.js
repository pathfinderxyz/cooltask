import React, { useContext, useState,useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet,ScrollView ,Modal,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import p1 from './../../assets/publicidad/hoy/p1.jpg';
import p2 from './../../assets/publicidad/hoy/p2.jpg';
import p3 from './../../assets/publicidad/hoy/p3.jpg';
import p4 from './../../assets/publicidad/hoy/p4.jpg';
import { AuthContext } from './../../context/AuthContext';
import axios from "axios";

const url = "https://api.cooltask.homes/public/usuarios";
const urlpublicidad = "https://api.cooltask.homes/public/publicidad";

const Tareas = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const usuario = userInfo[0].id;
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const pub1 = "p1";
  const pub2= "p2";
  const pub3 = "p3";
  const pub4 = "p4";

  const peticionGet = async () => {
    await axios.get(url + "/" + usuario).then((response) => {
      setData(response.data[0]);
    });
  };

  const peticionGetp1 = async () => {
    await axios.post(urlpublicidad,{usuario,pub1}).then((response) => {
      peticionGet();
      setModalVisible(false);
    });
  };
  
  const peticionGetp2 = async () => {
    await axios.post(urlpublicidad,{usuario,pub2}).then((response) => {
      peticionGet();
      setModalVisible2(false);
    });
  };
  
  const peticionGetp3 = async () => {
    await axios.post(urlpublicidad,{usuario,pub3}).then((response) => {
      peticionGet();
      setModalVisible3(false);
    });
  };
  
  const peticionGetp4 = async () => {
    await axios.post(urlpublicidad,{usuario,pub4}).then((response) => {
      peticionGet();
      setModalVisible4(false);
    });
  };
  
  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <ScrollView>
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>

      <Text style={{
        fontSize: 14,
        color: '#000',
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 10,
  
      }}>
        Las tareas se activaran cada 24 horas, recibe recompensas por ver la publicidad de los anunciantes.
      </Text>

      {data.p1 > 0 &&
      <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 12,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
          Ver Publicidad
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              <Image
                source={p1}
                style={{ width: 30, height: 30}}
              />
               <Text style={{
               marginLeft:11,
              }}>$0.50</Text>
            </Text>
            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}
            style={{
              backgroundColor: '#16c25e',
              padding:8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Haz Click
            </Text>
          </TouchableOpacity>
          </View>

        </View>
        }

     {data.p2 > 0 &&
        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 12,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
          Ver Publicidad
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              <Image
                source={p2}
                style={{ width: 30, height: 30}}
              />
               <Text style={{
               marginLeft:11,
              }}>$0.50</Text>
            </Text>
            <TouchableOpacity onPress={()=>setModalVisible2(!modalVisible2)}
            style={{
              backgroundColor: '#16c25e',
              padding:8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

              Haz Click
            </Text>
          </TouchableOpacity>
          </View>

        </View>
      }
       {data.p3 > 0 &&
        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 12,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
          Ver Publicidad
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              <Image
                source={p3}
                style={{ width: 30, height: 30}}
              />
               <Text style={{
               marginLeft:11,
              }}>$0.50</Text>
            </Text>
            <TouchableOpacity onPress={()=>setModalVisible3(!modalVisible3)}
            style={{
              backgroundColor: '#16c25e',
              padding:8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

               Haz Click
            </Text>
          </TouchableOpacity>
          </View>

        </View>
      }
      {data.p4 > 0 &&
        <View style={styles.listem}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text
            style={{
              color: '#07092c',
              fontSize: 12,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
          Ver Publicidad
            
          </Text>
          
          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
             
            <Text
              style={{
                color: '#07092c',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              <Image
                source={p4}
                style={{ width: 30, height: 30}}
              />
               <Text style={{
               marginLeft:11,
              }}>$0.50</Text>
            </Text>
            <TouchableOpacity onPress={()=>setModalVisible4(!modalVisible4)}
            style={{
              backgroundColor: '#16c25e',
              padding:8,
              width: 100,
              borderRadius: 7,
            }}>
            <Text style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
            }}>

               Haz Click
            </Text>
          </TouchableOpacity>
          </View>

        </View>
       }

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
            <Image
                source={p1}
                style={{ width: 310, height: 210}}
              />

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Mas tarde</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={peticionGetp1}
              >
                <Text style={styles.textStyle}>Claim</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          statusBarTranslucent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image
                source={p2}
                style={{ width: 310, height: 210}}
              />

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>Mas tarde</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={peticionGetp2}
              >
                <Text style={styles.textStyle}>Claim</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible3}
          statusBarTranslucent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image
                source={p3}
                style={{ width: 310, height: 210}}
              />

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle}>Mas tarde</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={peticionGetp3}
              >
                <Text style={styles.textStyle}>Claim</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible4}
          statusBarTranslucent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image
                source={p4}
                style={{ width: 310, height: 210}}
              />

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible4(!modalVisible4)}
              >
                <Text style={styles.textStyle}>Mas tarde</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonfiltrar]}
                onPress={peticionGetp4}
              >
                <Text style={styles.textStyle}>Claim</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listem: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
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
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width:100
  },
  modalText: {
    marginBottom: 50,
    paddingHorizontal:10,
    textAlign: "center",
    fontSize: 15,
    fontWeight:'bold'
  },
});
export default Tareas;