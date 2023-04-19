import 'react-native-gesture-handler';

import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';


import MainContainer from './Components/NavigationBar';


const Stack = createStackNavigator();


class App extends Component {
  render() {
    return (
    <NavigationContainer>
     <MainContainer/>
    </NavigationContainer>
  );
}}
export default App;

