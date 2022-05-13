import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
//import Video from 'react-native-video';
import {Dimensions} from 'react-native';
import Blink from '../components/Blink';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cameraview = ({navigation}) => {
  const onSelectSwitch = () => {};
  return (
    <SafeAreaView>
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

export default Cameraview;
