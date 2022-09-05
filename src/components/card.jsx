import React from "react";
import { Button, Text, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Card = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const navigation = useNavigation() 
    const handlePress = () => setExpanded(!expanded);


    return (
       <View>
        <Image source={{ uri: props.img }} style={{width:100, height:100}}/>
          <Text style={styles.item}>
            {props.text}
          </Text>
          <Button
           title={`Detalle de ${props.text}`}
           style={{marginTop:100}}
           onPress={(e) => navigation.navigate("Detalle", { id: props.id})}
           />
        </View>

  );
};

export default Card;

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20
    },
})