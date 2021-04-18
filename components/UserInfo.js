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
const getRecordInfo = async () => {

    const result = await fetch('https://1723ab792224.ngrok.io/record/records', {
        method: "GET",
    }).catch(error => {
        console.warn(error);
    });

    return result.json();
    // alert('height:' + photo.height + ' width:' + photo.width);
}

const fetchRecordDetail = async (id) => {
    const result = await fetch(`https://1723ab792224.ngrok.io/record/records/${id}`, {
        method: "GET",
    }).catch(error => {
        console.warn(error);
    });

    return result.json();
}

export default function UserInfo(props) {
    const [record, setRecord] = useState(null);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await getRecordInfo();
            setRecord(res);
            setItem(null);
            console.log(res);
        }
        fetchInfo();
    }, []);

    
    const getRecordDetail = async (id) => {
        const detail = await fetchRecordDetail(id);
        setItem(detail);
    }

    const UserList = () => {
        return (
            <View>
                <Text>Username:</Text>
                <Text>Name:</Text>
                <Button onPress={()=>{}} title={'Save'}></Button>
            </View>
        );
    }

    const RecordList = () => {
        if (record==null) return null;
        const infoList = [];

        return (record == null ? null :
            <View style={styles.container}>
                {item == null ? (<FlatList
                    data={infoList}
                    renderItem={({ item }) =>
                        <Button
                            onPress={() => { getRecordDetail(item.id) }}
                            title={item.createdAt} 
                        />}
                />) :
                    <ScrollView >
                        
                    </ScrollView>
                }
            </View>
        );
    }

    return (
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
            <Text style={{ margin:10, fontSize: 24, fontWeight: "700", letterSpacing: 3 }}>User Information</Text>
            {UserList()}
            <Text style={{ fontSize: 24, fontWeight: "700", letterSpacing: 3 }}>Records</Text>
            {RecordList()}
        </View>
    )
}