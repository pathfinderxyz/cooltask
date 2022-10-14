import React, { useContext, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Alert,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InputField from "./../../componentes/InputFliedClaro";
import CustomButton from "./../../componentes/CustomButton";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import { AuthContext } from './../../context/AuthContext';
import usdtimg from './../../assets/botones/usdt.png';

const url = "https://api.cooltask.homes/public/usuarios";
const urlrdepositos = "https://api.cooltask.homes/public/depositos";

const Confirmardeposito = ({ navigation }) => {

    const { userInfo } = useContext(AuthContext);

    const [cantidad, setCantidad] = useState(null);
    const [walletorigen, setWalletorigen] = useState(null);
    const [txid, settxid] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const usuario = userInfo[0].id;

    const [Error, setError] = useState(false);
    const [Errorcantidad, setErrorcantidad] = useState(false);

    const validardatos = () => {
        setError(false);
        setErrorcantidad(false);
        if (cantidad !== null || walletorigen !== null || txid !== null) {
            if (cantidad < 20) {
                setErrorcantidad(true);
            } else {
                setModalVisible(true);
            }
        } else {
            setError(true);
        }
    };

    const ProcesarDeposito = () => {
      axios.post(urlrdepositos, { usuario,cantidad,walletorigen,txid }).then((res) => {
            setModalVisible(false);
            navigation.navigate("depositoproceso");
        })
            .catch((err) => {
                console.log(err);
                setModalVisible(false);
            });
    };


    return (
        <ScrollView>
            <View showsVerticalScrollIndicator={false}>

                <View style={styles.listemhistorial}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            color: "#000",
                            marginBottom: 30,
                            marginTop: 10,
                        }}
                    >
                        Introduzca los datos del Deposito
                    </Text>
                    {Error && (
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "500",
                                color: "red",
                                marginBottom: 30,
                            }}
                        >
                            ¡Error, hay campos vacios!
                        </Text>
                    )}
                    {Errorcantidad && (
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "500",
                                color: "red",
                                marginBottom: 30,
                            }}
                        >
                            Error, el minimo de deposito es 20 usdt.
                        </Text>
                    )}
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: "#000",
                            marginBottom: 5,
                            fontWeight: "500",
                        }}
                    >
                        Cantidad
                    </Text>

                    <InputField
                        value={cantidad}
                        onChangeText={(text) => setCantidad(text)}
                    />

                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: "#000",
                            marginBottom: 5,
                            fontWeight: "500",
                        }}
                    >
                        Wallet de origen
                    </Text>

                    <InputField
                        value={walletorigen}
                        onChangeText={(text) => setWalletorigen(text)}
                    />

                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: "#000",
                            marginBottom: 5,
                            fontWeight: "500",
                        }}
                    >
                        TxID
                    </Text>

                    <InputField
                        value={txid}
                        onChangeText={(text) => settxid(text)}
                    />


                    <TouchableOpacity onPress={validardatos}
                        style={{
                            backgroundColor: '#07092c',
                            padding: 12,
                            borderRadius: 7,
                        }}>
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 14,
                        }}>

                            Enviar datos
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            color: "#000",
                            marginBottom: 20,
                            marginTop: 30,
                        }}
                    >
                        Nota
                    </Text>

                    <Text
                        style={{
                            fontSize: 11,
                            color: "#000",
                        }}
                    >
                        * En caso de presentar retrasos puede escribirnos al soporte y enviarnos un capture del deposito.
                    </Text>


                </View>


            </View>
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
                                ¿Desea confirmar el deposito?
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cerrar</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonfiltrar]}
                                    onPress={ProcesarDeposito}
                                >
                                    <Text style={styles.textStyle}>Confirmar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    listemhistorial: {
        marginTop: 20,
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
        margin: 5,
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
    },
    modalText: {
        marginBottom: 50,
        paddingHorizontal: 10,
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold'
    },
});
export default Confirmardeposito;