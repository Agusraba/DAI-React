import React from 'react';
import { TextInput, StyleSheet, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';
import Card from '../components/card';
import { useContextState } from '../../contextState';
import CardMenu from '../components/CardMenu';




export default function Home() {
  const [platos, setPlatos] = useState([]);
  const {contextState, setContextState} = useContextState();
  const navigation = useNavigation();


  const buscar = (busq) => {
    console.log(busq)
    if(busq.length>2){
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9316355954b2427dbef230859bc5cab3&query=${busq}`)
      .then(function(res){
          setPlatos(res.data.results)
      })
      .catch(function(error){
          console.log(error)
          console.log("no se han traido los platos")
      })
    }
      
  }
  if(contextState.token == ''){
    console.log("no hay token")
    navigation.navigate("LogIn")
  }

  return(
    <>
    <TextInput
          style={styles.input}
          onChangeText={(busq) => buscar(busq)}
          placeholder="Busca plato"
          placeholderTextColor="#000"
        />
        <FlatList
        keyExtractor={(item) => item.id}
        data={platos}
        renderItem={({item}) =>(
          <Card
          text={item.title}
          img={item.image} 
          id={item.id}
          />
      )}
      />
      {
        contextState.menu.listaPlatos.length == 0
        ?
        <></>
        :
        <>
        <Text>El health score proemdio del menu es: {contextState.menu.healthscorePromedio.toFixed(2)}</Text>
        <Text>El precio menu es: {contextState.menu.precio.toFixed(2)}</Text>
         {
         contextState.menu.cantVeganos == 1
         ?
         <Text>Hay {contextState.menu.cantVeganos} plato vegano </Text>
        :
        <Text>Hay {contextState.menu.cantVeganos} platos veganos </Text>
        }
       
       {
         contextState.menu.cantNoVeganos == 1
         ?
         <Text>Hay {contextState.menu.cantNoVeganos} plato no vegano </Text>
        :
        <Text>Hay {contextState.menu.cantNoVeganos} platos no veganos </Text>
        }
        <Text style={styles.item}>Platos del menu</Text>
        <FlatList
        keyExtractor={(item) => item.id}
        data={contextState.menu.listaPlatos}
        renderItem={({item}) =>(
          <CardMenu
          text={item.title}
          img={item.image} 
          />
      )}
      />
        </>
      }
      
      </>
  )
}


const styles = StyleSheet.create({
input: {
  width: 1000,
  height: 50,
  margin: 12,
  borderWidth: 1,
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
  backgroundColor: "#00bfff"
},
bold: {
  justifyContent: "center",
  alignItems: "center",
},
item: {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  fontWeight: 'bold',
  fontSize: 20
}
},
);