import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { CheckBox, Icon } from '@rneui/themed';
// import {CheckBox} from "react-native-elements";

export default class Edit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.crop}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 25, }}>
                            <Text style={styles.title}>Crop</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Apple' />
                        </View>
                        <Text style={{ color: 'white', marginTop: 10, }}>________________________________</Text>
                    </View>

                    <Image
                        source={require("../assets/images/changephoto.png")}
                        style={styles.image} />
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 35, }}>
                        <Text style={styles.title}>Discription</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Just planted' />
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, }}>____________________________________________</Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 35, }}>
                        <Text style={styles.title}>Area</Text>
                        <TextInput
                            style={{
                                fontSize: 25,
                                fontWeight: '300',
                                marginLeft: 120,
                            }}
                            placeholder='T104' />
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, }}>____________________________________________</Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 35, }}>
                        <Text style={styles.title}>Date of planting</Text>
                        <TextInput
                            style={{
                                fontSize: 25,
                                fontWeight: '300',
                                marginLeft: 30,
                            }}
                            placeholder='03.25.2022' />
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, }}>____________________________________________</Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 35, }}>
                        <Text style={styles.title}>Add sensor</Text>
                        <View>
                            <Text style={styles.sensor}>Weather tmpe</Text>
                            <Text style={styles.sensor}>Wind speed</Text>
                            <Text style={styles.sensor}>Soil moisture</Text>
                        </View>

                        <View>
                            <Image
                                source={require("../assets/images/checked.png")}
                                style={styles.check} />
                            <Image
                                source={require("../assets/images/checked.png")}
                                style={styles.check} />
                            <Image
                                source={require("../assets/images/checked.png")}
                                style={styles.check} />
                        </View>


                    </View>
                    <Text style={{ color: 'white', marginTop: 10, }}>____________________________________________</Text>
                </View>

                <TouchableOpacity
                    onPress={() => { alert("changes have saved") }}
                    style={styles.save}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    crop: {
        flexDirection: 'row',
        marginTop: 20,
    },
    title: {
        color: '#1C1C1C',
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 5,
    },

    input: {
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 50,
    },
    image: {
        marginTop: -20,
        marginLeft: 10,
        width: 90,
        height: 100,
    },
    sensor: {
        color: '#C4C4C4',
        marginLeft: 25,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 23,
        fontWeight: '300',
    },
    check: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 14,

    },
    // uncheck: {
    //     width: 20,
    //     height: 20,
    //     marginLeft: 15,
    //     marginTop: 10,
    //     marginBottom: 14,
    //     opacity: this.state.imgOpacity
    // },
    save: {
        backgroundColor: "#65B958",
        width: 100,
        borderRadius: 15,
        marginTop: 40,
        marginLeft: 110,
    },
    saveText: {
        color: "white",
        fontSize: 35,
        fontWeight: "300",
        marginLeft: 13,
    },

});