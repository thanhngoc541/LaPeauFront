import React from 'react';

import UserInput from './UserInput';
import { View, Text, Image, TouchableOpacity } from "react-native";
import Wallpaper from './Wallpaper';
const HomeHeader = (props) => (
    // <Wallpaper flex={0}>
    <View style={{ backgroundColor: '#27AAE1', flexDirection: 'row', flex: 0.5, alignItems: 'center', opacity: 0.9 }}>
        <UserInput tleft={-16}
            width={300}
            source={require('../assets/search.png')}
            placeholder="Search"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
        />
        <Image source={require('../assets/bell.png')} style={{
            flex: 0.1,
            width: 10,
            height: 35,
            marginRight: 10
        }}></Image>
        <TouchableOpacity
            style={{
                flex: 0.1,
                margin: 4,
                width: 40,
                height: 45,
                marginRight: 15
            }}
            onPress={() => { props.navigation.navigate('HomeScreen', { screen: 'UserInfoScreen' }) }}
        >
            <Image source={require('../assets/username.png')} style={{
                // flex: 0.1,
                // margin: 4,
                // width: 40,
                // height: 40,
                // marginRight: 10
            }}></Image>
        </TouchableOpacity>
    </View >
    // </Wallpaper>
)
export default HomeHeader;