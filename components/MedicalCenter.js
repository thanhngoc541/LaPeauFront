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

export default function MedicalCenter() {
    const [info,setInfo] = useState(null);
    const [item,setItem]=useState(null);
    
    const getMedicalCenter = async () => {

        const result = await fetch('https://1723ab792224.ngrok.io/info/medicalcenter', {
            method: "GET",
        }).catch(error => {
            console.warn(error);
        });
        return result.json();
        // alert('height:' + photo.height + ' width:' + photo.width);
    }

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await getMedicalCenter();
            setInfo(res);
            
        }
        if (info==null) fetchInfo();
    }, []);
    
    
    const List = () => {
        return (info==null?null:
            <View style={styles.container}>
                {item==null?(<FlatList
                    data={[
                        {...info[0], key:1},
                        {...info[1], key:2}
                    ]}
                    renderItem={({ item }) => <Button onPress={() => {setItem(item)}} title={item.name} />}
                />):
                <ScrollView >
                    <Text>Name: {item.name}</Text>
                    <Text>Address: {item.address}</Text>
                    <Text>Phone: {item.phone}</Text>
                </ScrollView> 
            }
            </View>
        );
    }

    return (
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
            <Text style={{ position: 'absolute', top: 20, fontSize: 24, fontWeight: "700", letterSpacing: 3 }}>Medical Center</Text>
            {List()}
        </View>
    )
}