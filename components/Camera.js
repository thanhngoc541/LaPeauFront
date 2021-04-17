import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
const styles = StyleSheet.create({
    image: {
        borderRadius: 35,
        height: 70,
        width: 70,
    },

});
export default ({ navigation }) => (
    
    <TouchableHighlight
        style={{ flex: 1, backgroundColor: '#27AAE1', alignItems: 'center', justifyContent: 'center' }}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('DetectScreen', {})}>
        
            <Image style={{
                borderRadius: 35,
                height: 70,
                width: 70,
            }} source={require('../assets/camera.png')}></Image>
    </TouchableHighlight>

)