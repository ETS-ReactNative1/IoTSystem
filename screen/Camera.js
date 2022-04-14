import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';


export default class Camera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.live}>
                        <Text style={{ color: "red", fontSize: 25, fontWeight: "900", marginTop: -5, }}> .</Text>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "300" }}> Live </Text>
                    </TouchableOpacity>

                    <Text style={{ color: "#5A8154", fontSize: 25, fontWeight: "300", marginTop: 10, marginLeft: 10, }}> Apple </Text>

                    <TouchableOpacity style={styles.camera}>
                        <Text style={{ color: "#26D476", fontSize: 16, fontWeight: "300", marginTop: 5, }}> Camera #1</Text>

                    </TouchableOpacity>
                </View>

                <Image
                    source={require("../assets/images/appletree.jpeg")}
                    style={styles.appletree}
                />
                <View stle ={styles.operation}>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: "#EBFED3",
    },
    live: {
        flexDirection: 'row',
        backgroundColor: "#97E747",
        // marginTop: 10,
        margin: 10,
        marginLeft: 20,
        width: 70,
        borderRadius: 6,
    },
    camera: {
        borderColor: "#85BB65",
        borderWidth: 1,
        margin: 10,
        marginLeft: 90,
        width: 90,
        borderRadius: 6,
    },
    appletree:{
        width: 390,
        height: 710,
        //position: 'relative',
    },
    operation:{
        marginVertical: 90,
        backgroundColor: "black",
        width: 130,
        height: 630,
        //position: "absolute",
    },

});