import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const Portfolio = ({ navigation, route}) => {

    const handlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
        </View>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    },
    btnContainer: {
        flexDirection: 'row'
    },
    btnText: {
        color: '#fff',
        fontSize: 19,
        paddingBottom: 9
    }
})