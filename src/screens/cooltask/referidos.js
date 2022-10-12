import * as React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Monedas from "./../../assets/botones/monedas.png";
import Ionicons from "@expo/vector-icons/Ionicons";

const Referidos = ({ navigation }) => {
  return (
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginLeft: 16,
            marginRight: 14,
            fontWeight: "bold",
          }}
        >
          Mi Equipo
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#000",
            marginLeft: 14,
            marginRight: 16,
            fontWeight: "bold",
          }}
        >
          Integrantes: 2
        </Text>
      </View>

      <View style={styles.listem}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#07092c",
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Integrantes: 0
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Agente Externo
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#07092c",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Ionicons name="person" color="green" size={16} />{" "}
            pathfinder@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.listem}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#07092c",
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Integrantes: 0
          </Text>
          <Text
            style={{
              color: "green",
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Agente Externo
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#07092c",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Ionicons name="person" color="green" size={16} />{" "}
            surd56@hotmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listem: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
});
export default Referidos;
