import React from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Verificar } from '../../services/axiosService';
import {ActionTypes, useContextState} from '../../contextState'

export default function LogIn() {
  const [userState, setUserState] = useState({
    email: '',
    password: ''
  });
  const [load, setLoad] = useState(false)
  const navegacion = useNavigation() 
  const {contextState, setContextState} = useContextState();

  const validation = async (event) => {
    event.preventDefault()
    if(!userState.email || !userState.password) {
      Alert.alert("Complete ambos campos")
      }
      else{
        setLoad(true)
        await Verificar(userState)
        .then((token)=>{
          setContextState({
            type: ActionTypes.SetToken,
            value: token,
        })
          navegacion.navigate('Home')
      })
      .catch((e) => {    
        Alert.alert("No autorizado")
        setLoad(false)
        });
      }
  } 
 

  return (
   
      <SafeAreaView style={styles.centered}>
        <Text style={styles.hola}>Inicio de sesión</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUserState({ ...userState, email: text })}
          value={userState.email}
          placeholder="Ingresa tu Email"
          placeholderTextColor="#000"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={text => setUserState({ ...userState, password: text })}
          value={userState.password}
          placeholder="Ingresa tu Contraseña"
          placeholderTextColor="#000"
        />

        {
          load
          ?
          <ActivityIndicator/>
          :
          
          <Button
            onPress={validation}
            title="Ingresar"
            style={{marginTop:100}}
          />
        }
      </SafeAreaView>
    

  );


};

const styles = StyleSheet.create({
  input: {
    width: 500,
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    textAlign: "center",
    borderRadius: 10

  },
  centered: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E4E2"
  },
  hola: {
    fontWeight: "bold",
    color: "#000",
  
  },
  button: {
    backgroundColor:"#841584",
    margin: 100
  },
},
);
