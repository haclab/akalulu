import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, StatusBar } from 'react-native'

const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.logo}>Akalulu App</Text>
            </View>
            <View style={styles.bottomPart}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.intro}>Find out every thing you need to know about the 2021 Elections.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.introBtn} >
                    <Text style={styles.btnText}>Get Started </Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#0011ff" translucent={true} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#0050ff',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        topPart: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 2,
        },
        logo: {
            fontSize: 35,
            // fontWeight: 700,
            color: '#ffffff'
        },
        bottomPart: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignSelf: 'stretch',
            padding: 30
        },
        welcome: {
            fontSize: 25,
            marginBottom: 15,
            // fontWeight: 500,
        },
        intro: {
            fontSize: 15,
            marginBottom: 18,
            color: '#999999'
        },
        introBtn: {
            borderRadius: 30,
            backgroundColor: '#0050ff',
            padding: 10,
            paddingHorizontal: 20,
            alignSelf: 'flex-end',
            color: '#fff',
            width: 150
        },
        btnText: {
            color: '#ffffff'
        }
    }
)