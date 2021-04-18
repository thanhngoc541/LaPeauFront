import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, StyleSheet, Button, ScrollView } from "react-native";
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
const getSicknessInfo = async () => {

    const result = await fetch('https://1723ab792224.ngrok.io/info/sickness', {
        method: "GET",
    }).catch(error => {
        console.warn(error);
    });

    return result.json();
    // alert('height:' + photo.height + ' width:' + photo.width);
}

export default function SicknessInfo(props) {
    const [info, setInfo] = useState(null);
    const [item, setItem] = useState(null);
    let { res } = props;
    if (res == null) res = ["", "", "", ""];
    const List = () => {
        console.log(res)
        return (info == null ? null :
            <View style={styles.container}>
                {item == null ? (<FlatList
                    data={[
                        { ...info[0], key: res[0].name, probability: res[0] },
                        { ...info[1], key: res[1].name, probability: res[1] },
                        { ...info[2], key: res[2].name, probability: res[2] },
                        { ...info[3], key: res[3].name, probability: res[3] },
                    ]}
                    keyExtractor={item => item.name.toString()}
                    renderItem={({ item }) =>
                        <Button onPress={() => { setItem(item) }}
                            title={item.name + " " + (!item.probability ? "" : (": " + item.probability + "%"))} />}
                />) :
                    <ScrollView >
                        <Text>Name: {item.name}</Text>
                        <Text>Description: {item.description}</Text>
                        <Text>Reason: {item.reason}</Text>
                        <Text>Symptom: </Text>
                        {
                            item.symptom.map((st) => {
                                return (
                                    <Text>{st.description}</Text>
                                );
                            })
                        }
                    </ScrollView>
                }
            </View>
        );
    }
    useEffect(() => {
        const fetchInfo = async () => {
            const res = await getSicknessInfo();
            setInfo(res);
            setItem(null);
        }
        fetchInfo();
    }, []);
    return (
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
            <Text style={{ position: 'absolute', top: 20, fontSize: 24, fontWeight: "700", letterSpacing: 3 }}>Sickness Information</Text>
            {List()}
        </View>
    )
}