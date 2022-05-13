import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import { symbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default class Potato extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/images/background/potato.jpeg")}
                    style={{
                        width: 400,
                        height: 350,
                    }} />

                <View style={styles.infortag}>
                    <View style={styles.title}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 30,
                        }}>Potato</Text>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image
                                source={require("../assets/images/edit.png")}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginLeft: 195,
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
                                uri: 'http://143.244.179.77/potato_temp.png',
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
                                uri: 'http://143.244.179.77/potato_wind.png',
                            }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 35, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                    <View style={styles.topic}>
                        <Text style={{ fontSize: 20, color: "#6B706C", }}> Soil moisture</Text>
                        </View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'http://143.244.179.77/potato_moisture.png',
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
    image:{
        marginLeft: 10,
        width: 68,
        height: 32,

    },
    topic: {
        width: 150,
    },
    wind:{
        marginLeft: 9,
        marginTop: -10,
        width: 90,
        height: 40,
    },



});