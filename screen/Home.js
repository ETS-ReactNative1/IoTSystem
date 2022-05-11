import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Callout, Polygon} from 'react-native-maps';
class Home extends Component {
  constructor() {
    super();
  }

  state = {
    markers: [],
    coordinates: [
      { latitude: 37.766448, longitude: - 122.453135},
      { latitude: 37.774688, longitude: - 122.454769},
      { latitude: 37.771250, longitude: - 122.510833},
      { latitude: 37.764180, longitude: - 122.510259}
    
    ]
  }

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.768843, 
          longitude: - 122.480736,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        
        <Polygon
          coordinates={this.state.coordinates}
          fillColor={'rgba(100, 100, 200, 0.3)'}
        />
          <Marker
              coordinate={{
            latitude: 37.768843,
            longitude: - 122.480736,
          }}
          >
          <Callout onPress={() => this.props.navigation.navigate('T104')}>
                <Text>T104</Text>
              </Callout>
          </Marker>
      </MapView>
    );
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
export default Home;
