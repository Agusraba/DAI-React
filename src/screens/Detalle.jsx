import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useContextState } from '../../contextState'
import { useEffect } from 'react';
import CardPlatos from '../components/CardPlatos';
import { getPlatosById } from '../../services/cartaService';



const Detalle = ({ route }) => {
    const { id } = route.params
    const [platoState, setPlatoState] = useState([])
    const navigation = useNavigation();
    const {contextState, setContextState} = useContextState();

    useEffect((e) => {
        async function detallarPlato() {
            const detalle = await getPlatosById(id)
            setPlatoState(detalle)
    }
    detallarPlato()
    }, []);
    if(contextState.token == ''){
        console.log("no hay token")
        navigation.navigate("LogIn")
      }
    
    return (
        <>
        {(console.log(platoState))}
        <View>
            <CardPlatos
                Detalle={platoState}
            />
        </View>
        </>
    )

}
export default Detalle;