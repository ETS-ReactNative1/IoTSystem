/**
Senior Project -- IoT System
@author: Yang Liu
 */

import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Home from './screen/Home';
import Data from './screen/Data';
import EditSensor from './screen/EditSensor';
import RealData from './screen/Realdata';
import SimulData from './screen/tab/SimulData';
import apple from './screen/apple';
import History from './screen/History';
import Banana from './screen/Banana';
import Peach from './screen/Peach';
import Chilli from './screen/Chilli';
import Tomato from './screen/Tomato';
import Potato from './screen/Potato';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { createMaterialTopTabNavigator, MaterialTopTabView } from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {

  render() {

    // createTopTabs = () => {
    //   return (<MaterialTopTabView.Navigator>
    //     <MaterialTopTabs.Screen
    //       name="Real data"
    //       component={RealData} />
    //     <MaterialTopTabs.Screen
    //       name="Sumilate data"
    //       component={SimulData} />

    //   </MaterialTopTabView.Navigator>
    //   );
    // }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'IoT System',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />

          <Stack.Screen name="Data" component={Data}
            options={{
              title: 'Data',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="RealData" component={RealData}
            options={{
              title: 'Real Data',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />
          <Stack.Screen name="Apple" component={apple}
            options={{
              title: 'Apple',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />
          <Stack.Screen name="History" component={History}
            options={{
              title: 'History',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />
          <Stack.Screen name="Banana" component={Banana}
            options={{
              title: 'Banana',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="Peach" component={Peach}
            options={{
              title: 'Peach',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="Chilli" component={Chilli}
            options={{
              title: 'Chilli',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="Tomato" component={Tomato}
            options={{
              title: 'Tomato',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          <Stack.Screen name="Potato" component={Potato}
            options={{
              title: 'Potato',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

          {/* <Stack.Screen name="SimulData" component={SimulData}
            options={{
              title: 'Simulate Data',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} /> */}

          <Stack.Screen name="EditSensor" component={EditSensor}
            options={{
              title: 'Edit Sensor',
              headerStyle: {
                backgroundColor: '#85BB65',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}