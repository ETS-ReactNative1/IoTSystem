import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import { symbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Linking } from 'react-native';




export default class History extends Component {

    render() {

        return (

            <View style={styles.container}>


                <CalendarList
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={390}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day => {
                        // if (day >= 15) { Linking.openURL('http://143.244.179.77/temp2.png') };
                        // if (day < 14) { Linking.openURL('http://143.244.179.77/temp1.png') };
                        Linking.openURL('http://143.244.179.77/temp'+day.day+'.png');
                        console.log('selected day', day); 
                    }

                    }
                //   ...calendarListParams
                //   ...calendarParams
                />

                <Image
                    style={styles.image}
                    source={{
                        uri: 'http://143.244.179.77/temp_latest.png',
                    }}

                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    image: {
        marginTop: -60,
        width: 390,
        height: 390,

    },
});