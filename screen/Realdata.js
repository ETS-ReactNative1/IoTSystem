import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
//import { symbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default class Realdata extends Component {

    constructor() {
        super();
        this.state = {
            imgOpacity: 1
        }
        this.toggleImage = this.toggleImage.bind(this);
    }

    toggleImage() {
        if (this.state.imgOpacity === 1) {
            this.setState({
                imgOpacity: 0
            })
        } else {
            this.setState({
                imgOpacity: 1
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Line1}>
                    <View style={styles.temp}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: '#575555',
                                marginLeft: 10
                            }}>
                            Weather Temp</Text>
                        <TouchableOpacity
                            onPress={this.toggleImage}
                            style={styles.tempTag}>
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: '#EC874E',
                                    fontWeight: "400",
                                    marginTop: 10,
                                    marginLeft: 10,
                                }}>75</Text>
                            <Image
                                source={require("../assets/images/tmpe.png")}
                                style={styles.tempImage} />
                            <Image
                                source={require("../assets/images/chart.jpeg")}
                                style={{
                                    width: 140,
                                    height: 110,
                                    marginTop: -110,
                                    marginLeft: 5,
                                    opacity: this.state.imgOpacity
                                }} />
                            <TouchableOpacity
                                onPress={() => { alert("you clicked me") }}
                                style={{ marginLeft: 110 }}>
                                {/* <Text
                                    style={{
                                        fontSize: 40,
                                        color: '#4F4E4E',
                                        fontWeight: "400",
                                        marginTop: -60,
                                        opacity: this.state.imgOpacity
                                    }}>...</Text> */}
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                    {/* ....................Wind Speed.................................... */}
                    <View style={styles.temp}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: '#575555',
                                marginLeft: 16
                            }}>
                            Wind Speed</Text>
                        <TouchableOpacity
                            onPress={() => { alert("you clicked me") }}
                            style={styles.tempTag}>
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: '#8FCD3F',
                                    fontWeight: "400",
                                    marginTop: 10,
                                    marginLeft: 10,
                                }}>13</Text>
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: '#5B5959',
                                    fontWeight: "500",
                                    marginTop: 5,
                                    marginLeft: 47,
                                }}
                            >Mph</Text>
                            <TouchableOpacity
                                onPress={() => { alert("you clicked me") }}
                                style={{ marginLeft: 110, marginTop: 15, }}>
                                <Text
                                    style={{
                                        fontSize: 40,
                                        color: '#4F4E4E',
                                        fontWeight: "400",
                                        marginTop: -30,
                                    }}>...</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* .............................Line2............................. */}
                <View style={styles.Line1}>
                    <View style={styles.temp}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: '#575555',
                                marginLeft: 30
                            }}>
                            Soil pH</Text>
                        <TouchableOpacity
                            onPress={() => { alert("you clicked me") }}
                            style={styles.tempTag}>
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: '#68DAE1',
                                    fontWeight: "400",
                                    marginTop: 10,
                                    marginLeft: 10,
                                }}>8.7</Text>
                            <Image
                                source={require("../assets/images/soilph.jpeg")}
                                style={styles.tempImage} />
                            <TouchableOpacity
                                onPress={() => { alert("you clicked me") }}
                                style={{ marginLeft: 110 }}>
                                <Text
                                    style={{
                                        fontSize: 40,
                                        color: '#4F4E4E',
                                        fontWeight: "400",
                                        marginTop: -30,
                                    }}>...</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                    {/* ....................Wind Speed.................................... */}
                    {/* <View style={styles.temp}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: '#575555',
                                marginLeft: 16
                            }}>
                            Wind Speed</Text>
                        <TouchableOpacity
                            onPress={() => { alert("you clicked me") }}
                            style={styles.tempTag}>
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: '#8FCD3F',
                                    fontWeight: "400",
                                    marginTop: 10,
                                    marginLeft: 10,
                                }}>13</Text>
                                <Text
                                style={{
                                    fontSize: 40,
                                    color: '#5B5959',
                                    fontWeight: "500",
                                    marginTop: 5,
                                    marginLeft: 47,}}
                                    >Mph</Text>
                            <TouchableOpacity
                                onPress={() => { alert("you clicked me") }}
                                style={{ marginLeft: 110, marginTop: 15, }}>
                                <Text
                                style={{
                                    fontSize: 40,
                                    color: '#4F4E4E',
                                    fontWeight: "400",
                                    marginTop: -30,
                                }}>...</Text>
                                    </TouchableOpacity>
                        </TouchableOpacity>

                    </View> */}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Line1: {
        flexDirection: "row",
        // borderColor: "red",
        // borderWidth: 2,
        marginTop: 40,
        height: 200,
    },
    temp: {
        marginTop: 10,
        marginLeft: 25,
        width: 150,
    },
    tempTag: {
        height: 160,
        width: 150,
        marginTop: 5,
        borderColor: "#E0DCDC",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "white",
    },
    tempImage: {
        width: 80,
        height: 80,
        marginTop: -10,
        marginLeft: 47,
    },


});