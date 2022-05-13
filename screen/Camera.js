import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
//import Video from 'react-native-video';
import {Dimensions} from 'react-native';
import Blink from '../components/Blink';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';


const Cameraview = ({navigation}) => {
  const onSelectSwitch = () => {};
  return (
    <SafeAreaView>

      {/* <Video source={{ uri: "http://192.168.0.53:8000/index.html" }}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo} /> */}
      <View style ={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: -30
      }}> 
      <View>

      </View>

        <View
          style={{
            width: 250,
            height: 35,
            backgroundColor: 'grey',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Blink>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 10,
                right: 8,
                backgroundColor: 'red',
              }}
            />
          </Blink>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            Live
          </Text>
        </View>

        <View>

        </View>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Cameraview;
