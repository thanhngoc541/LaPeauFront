import React, { Component } from 'react';
import FeaturesSection from './FeaturesSection';
import HomeHeader from './HomeHeader';
import Camera from './Camera';
import { View } from 'react-native';
export default (props) => {
    
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <HomeHeader navigation={props.navigation}></HomeHeader>
            <FeaturesSection navigation={props.navigation}></FeaturesSection>
            {props.children}
            <Camera navigation={props.navigation} />
        </View>

    )
}
