import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';

export default class Realdata extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Text>Simulate Data</Text>
                </TouchableOpacity>
            </View>
        );
    }
}