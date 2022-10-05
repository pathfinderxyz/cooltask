import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const url = "https://apilogistick.iawork.tk/public/login";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [errorglobal, setErrorGlobal] = useState(false);

    const LoginAuth = (email,password) => {
        setIsLoading(true);
        axios.post(url,{email,password}).then(res => {
            
            if(res.data[0].conectado){
                setUserInfo(res.data);
                setUserToken(res.data[0].token);
    
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', JSON.stringify(userToken));
            }else{
                setErrorGlobal(true);
            }
          
        }).catch((err) => {
            console.log(err);
        })
       
        setIsLoading(false);
    }

    console.log(userInfo);
    console.log(userToken);

    const Logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken'); 
            userInfo = JSON.parse(userInfo);

            if(userInfo){
                setUserToken(userToken);
                setUserInfo(userInfo)
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(async() => {
        await isLoggedIn();
    }, []);


    return (
        <AuthContext.Provider value={{ LoginAuth, Logout, isLoading, userToken ,userInfo,errorglobal}}>
            {children}
        </AuthContext.Provider>
    );
}