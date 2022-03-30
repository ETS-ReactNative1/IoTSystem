import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.searchbar}>
                        <TextInput
                            style={styles.input}
                            placeholder='Search crops' />
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image
                                source={require("../assets/images/search.png")}
                                style={styles.search}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.searchHistory}>
                        <TouchableOpacity
                            style={styles.history}>
                            <Text style={styles.historyText}>Apple</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.history}>
                            <Text style={styles.historyText}>Banana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.history}>
                            <Text style={styles.historyText}>Chilli</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.history}>
                            <Text style={styles.historyText}>Tomato</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.taglist}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RealData')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/apple.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Apple</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Data')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/banana.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Banana</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Data')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/peach.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Peach</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Data')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/chilli.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Chilli</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Data')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/tomato.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Tomato</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Data')}
                            style={styles.tag}>
                            <Image
                                source={require("../assets/images/potato.jpeg")}
                                style={styles.tagImage} />
                            <View>
                                <Text
                                    style={styles.tagName}>Potato</Text>
                                <Text
                                    style={styles.tagDiscription}>information...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditSensor')}
                                style={styles.edit}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchbar: {
        flexDirection: "row",
    },
    input: {
        borderWidth: 1,
        borderColor: '#8C8B8B',
        padding: 8,
        marginVertical: 20,
        marginHorizontal: 15,
        width: 300,
        borderRadius: 5,
    },
    search: {
        height: 30,
        width: 30,
        marginTop: 23,
        marginHorizontal: -5,
    },
    searchHistory: {
        marginHorizontal: 15,
        marginTop: -6,
        flexDirection: "row",
    },
    history: {
        marginHorizontal: 2,
        borderWidth: 2,
        borderColor: '#97E747',
        borderRadius: 8,
    },
    historyText: {
        color: '#72EF5E',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 5,
        marginLeft: 5,
    },
    taglist: {
        marginTop: 20,
    },
    tag: {
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#777',
        height: 100,
        width: 360,
        marginVertical: 2,
        marginHorizontal: 10,
        borderRadius: 8,
        borderColor: '#E3DDDD',
    },
    tagImage: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 30,
        height: 67,
        width: 85,
    },
    tagName: {
        marginTop: 10,
        fontWeight: '500',
        fontSize: 20,
        color: '#535151',
    },
    tagDiscription: {
        marginTop: 7,
        color: '#535151',
        fontSize: 16,
    },
    edit:{
        marginTop: 30,
        marginLeft: 70, 
    },
    editText:{
        color: '#72EF5E',
        fontWeight: '400',
        fontSize: 22,
    },
});