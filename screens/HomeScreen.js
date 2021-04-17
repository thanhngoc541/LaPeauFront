import React from 'react';
import FeaturesSection from '../components/FeaturesSection';
import PeauDoctor from '../components/PeauDoctor';
import Camera from '../components/Camera';
import { View } from "react-native";
import HomeHeader from '../components/HomeHeader';

export default function HomeScreen ({navigation,route}) {
    return (
        
        <View style={ {flex:1, flexDirection: "column" }}>
            <HomeHeader></HomeHeader>
            <FeaturesSection></FeaturesSection>
            <PeauDoctor></PeauDoctor>
            <Camera navigation={navigation} />
        </View>
    );
};