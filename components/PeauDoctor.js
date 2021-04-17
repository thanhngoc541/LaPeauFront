import React from 'react';
import { View, Image, Text } from "react-native";
export default function PeauDoctor() {
    return (
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop:20 }} >
            <Text style={{ position: 'absolute',top:30, fontSize: 24, fontWeight: "700", letterSpacing: 5 }}>Peau Doctor</Text>
            <Image style={{
                margin: 'auto',
                borderRadius: 50,
                height: 250,
                width: 250,
            }} source={require('../assets/doctor.png')}></Image>
            <Text style={{
                marginTop: -10,
                paddingTop: 30,
                fontSize: 24,
                fontWeight: "500",
                marginBottom: 0
            }}>Take care of your skin
        </Text>
            <Text style={{}}>Life is better without skin diseases</Text>

        </View>
    )
}