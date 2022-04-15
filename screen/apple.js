import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import { symbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default class apple extends Component {

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
                        <Text style={{ fontSize: 20, color: "#6B706C", }}> Weather tpme</Text>
                        <Text style={{ fontSize: 20, marginLeft: 50, }}>75 F</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 60, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: "#6B706C", }}> Wind speed</Text>
                        <Text style={{ fontSize: 20, marginLeft: 70, }}>13 mph</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={{ fontSize: 20, marginLeft: 35, color: "#66D24B", }}>History</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: "#6B706C", }}> Soil moisture</Text>
                        <Text style={{ fontSize: 20, marginLeft: 64, }}>80%</Text>
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



});