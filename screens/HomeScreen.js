import React from 'react';
import { View, Text } from 'react-native';
import Community from '../components/Conmmunity';
import MedicalCenter from '../components/MedicalCenter';
import PeauDoctor from '../components/PeauDoctor';
import ScreenWraper from '../components/ScreenWraper';
import SicknessInfo from '../components/SicknessInfo';
import UserInfo from '../components/UserInfo';
export default function HomeScreen({ navigation, route }) {
    const screen = route.params.screen;
    return (
        <ScreenWraper navigation={navigation}>
            {screen == 'Home' ? <PeauDoctor></PeauDoctor> :
                screen == 'SicknessScreen' ? <SicknessInfo res={route.params.res}></SicknessInfo> :
                    screen == 'MedicalCenterScreen' ? <MedicalCenter></MedicalCenter> :
                        screen == 'ComunityScreen' ? <Community></Community> :
                            screen == 'UserInfoScreen' ? <UserInfo></UserInfo> :
                                null}
        </ScreenWraper>
    );
};