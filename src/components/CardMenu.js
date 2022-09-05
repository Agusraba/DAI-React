import React from "react";
import {Text, Image, StyleSheet, View } from 'react-native';


const CardMenu = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);


    return (
       <View>
        <Image source={{ uri: props.img }} style={{width:100, height:100, borderWidth: 1,}}/>
          <Text style={styles.item}>
            {props.text}
          </Text>
        </View>

  );
};

export default CardMenu;

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
})