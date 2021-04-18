import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, StyleSheet, Button,ScrollView } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: 100
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default function Community() {
    
    

    return (
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
            <Text style={{ position: 'absolute', top: 20, fontSize: 24, fontWeight: "700", letterSpacing: 3 }}>Community</Text>
            <Text>Comming soon...</Text>
        </View>
    )
}