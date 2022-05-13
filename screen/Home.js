import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import MapView, {Marker, Callout, Polygon} from 'react-native-maps';
export default class Apple extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('T104')}
        >
          <Image source={require("../assets/images/map.png")}/>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
