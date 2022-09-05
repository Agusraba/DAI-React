import { ActionTypes, useContextState } from "../../contextState";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Boton from '../components/Boton';




export const CardPlatos = (props) => {

  const { Detalle } = props
  const { contextState, setContextState } = useContextState();
  const navigation = useNavigation();
  let existe = contextState.menu.listaPlatos.find(plato => plato.id === Detalle.id)

  
const Eliminar = (vegano, id, Score, precioPlato) =>{
  let Vegano = 0
  let NoVegano= 0
  let nuevo = contextState.menu.listaPlatos.filter(plato => plato.id != id)
  let scoreTotal = contextState.menu.healthscoreTotal - Score
  console.log(contextState.menu.healthscoreTotal)
  console.log(Score)
  console.log(scoreTotal)
  if(vegano==false){
      NoVegano = 1
  }else{
      Vegano = 1
  }

  setContextState({
      type: ActionTypes.SetMenu,
      value:{
          cantPlatos: (contextState.menu.cantPlatos - 1),
          healthscoreTotal: scoreTotal,
          cantNoVeganos: (contextState.menu.cantNoVeganos - NoVegano),
          cantVeganos: (contextState.menu.cantVeganos - Vegano),
          precio: (contextState.menu.precio - precioPlato),
          healthscorePromedio: (scoreTotal/ (contextState.menu.cantPlatos -1)),
          listaPlatos: nuevo
      }
  })
  navigation.navigate("Home")
}

const Agregar = (precioPlato, vegano, Score) => {
  let Vegano = 0
  let NoVegano= 0
  let scoreTotal = parseInt(contextState.menu.healthscoreTotal + Score);
  if(vegano==true){
      Vegano = 1
  }else{
      NoVegano = 1
  }
  if(Vegano==1 && contextState.menu.cantVeganos==2){
      Alert.alert("No se admiten mas platos veganos")
      navigation.navigate("Home")
  }else if(NoVegano==1 && contextState.menu.cantNoVeganos==2){
      Alert.alert("No se admiten mas platos no veganos")
      navigation.navigate("Home")
  }else{
      setContextState({
          type: ActionTypes.SetMenu,
          value:{
              cantNoVeganos: (contextState.menu.cantNoVeganos + NoVegano),
              cantVeganos: (contextState.menu.cantVeganos + Vegano),
              precio: (contextState.menu.precio + precioPlato),
              cantPlatos: (contextState.menu.cantPlatos + 1),
              healthscoreTotal: scoreTotal,
              healthscorePromedio: (scoreTotal/(contextState.menu.cantPlatos+1)),
              listaPlatos:[...contextState.menu.listaPlatos, Detalle]
          }
      })
      navigation.navigate('Home')
  }
  
}

return (
  <View >
    <Text>{Detalle.title}</Text>
  <Image source={{ uri: Detalle.image }} style={{width:100, height:100}}/>
  <Text>{Detalle.vegan ? "Es vegano" : "No es vegano"}</Text>
  <Text>{Detalle.healthScore}</Text>
  <Text>{Detalle.pricePerServing}</Text>

{
  existe
  ?
  <Boton
  text={"Eliminar"}
  onPress={(e) =>  Eliminar(Detalle.vegan, Detalle.id, Detalle.healthScore, Detalle.pricePerServing)}
/>
:
  <Boton
  text={"Agregar"}
  onPress={(e) =>  Agregar( Detalle.pricePerServing, Detalle.vegan, Detalle.healthScore)}
/>
}
  </View>
);
}
export default CardPlatos;

const styles = StyleSheet.create({
  input: {
    width: 700,
    height: 500,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    alignContent:'center',
    margin: 40
  },
  title: {
    margin: 2,
    padding: 2,
    textAlign: "center",
    fontSize: 50
  },
  subtitle: {
    margin: 2,
    padding: 2,
    textAlign: "center",
    fontSize: 30
  }
},
)