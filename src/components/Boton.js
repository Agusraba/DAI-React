import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {
    const { onPress, text} = props

    return (
        <TouchableOpacity
            style={style.Boton}
            onPress={onPress}
        >

            <Text style={style.Text}>
                {text}
            </Text>
        </TouchableOpacity>   
    )
}

export default Boton;


const style = StyleSheet.create({

    Boton: {
        marginTop:'13%',
        backgroundColor: 'green',
        borderWidth:1,
        borderColor: 'green',
        borderRadius: 8,
        marginBottom:'14%',
        width: 300
    },
    Text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
    },

});