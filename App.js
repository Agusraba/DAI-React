import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/screens/LogIn.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home.jsx'
import { ContextProvider } from './contextState.js';
import MainStack from './navigation/mainStack.js';


export default function App() {
  return (
    <ContextProvider>
      <MainStack/>
      </ContextProvider>

  );
}

