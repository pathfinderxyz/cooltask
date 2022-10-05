import 'react-native-gesture-handler';
import './ignoreWarnings';
import * as React from 'react';
import { NavigationContainer, StackActions, StackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/navigation/start';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/Appnav';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();
function App() {
  return (


    <AuthProvider>
      <StatusBar style="light" />
      <AppNav />
    </AuthProvider>

  );
}

export default App;