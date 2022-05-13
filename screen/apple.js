import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import { symbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default class Apple extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/images/background/applebackground.jpeg")}
                    style={{
                        width: 400,
                        height: 350,
                    }} />

                <View style={styles.infortag}>
                    <View style={styles.title}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 30,
                        }}>Apple</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
                            <Image
                                source={require("../assets/images/camera.png")}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginLeft: 193,
                                }} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.info}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 20, color: "#6B706C", }}> Weather temp</Text>
                        </View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'http://143.244.179.77/apple_temp.png',
                            }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 60, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 20, color: "#6B706C", }}> Wind speed</Text>
                        </View>
                        <Image
                            style={styles.wind}
                            source={{
                                uri: 'http://143.244.179.77/apple_wind.png',
                            }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 35, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <View style={styles.topic}>
                            <Text style={styles.text}> Soil moisture</Text>
                        </View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'http://143.244.179.77/apple_moisture.png',
                            }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 56, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infortag: {
        backgroundColor: '#FFFFFF',
        // borderWidth: 2,
        // borderColor: '#8C8B8B',
        marginTop: -50,
        borderRadius: 30,
        height: 500,
    },
    title: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 40,

    },
    info: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,

    },
    topic: {
        width: 150,
    },
    text: {
        fontSize: 20,
        color: "#6B706C",
    },
    image: {
        marginLeft: 10,
        width: 68,
        height: 32,

    },
    wind:{
        marginLeft: 9,
        marginTop: -10,
        width: 90,
        height: 40,
    },



});