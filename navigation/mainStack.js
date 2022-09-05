import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../src/screens/Home";
import LogIn from "../src/screens/LogIn";
import Detalle from '../src/screens/Detalle'

const Stack = createNativeStackNavigator()

const MainStack =()=>{
    return(
    <NavigationContainer independent={true}>
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }
        }>
    
    <Stack.Screen
                name='LogIn'>
                {(props) => <LogIn {...props} 
                />}
            </Stack.Screen>
            <Stack.Screen
                name='Home'>
                    {(props) => <Home {...props} 
                />}
            </Stack.Screen>
            <Stack.Screen
                name='Detalle'>
                {(props) => <Detalle {...props} 
                />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    
    )}  
    export default MainStack