import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default (props) => {
    const { src, text, onPress } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={src} style={{ height: 30, width: 30 }} />
            <Text style={styles.text}> {text} </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop:5,
        fontSize: 18
    },
});
