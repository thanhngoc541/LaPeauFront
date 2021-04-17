import React from 'react';
import { View ,Text} from 'react-native';
import PeauDoctor from '../components/PeauDoctor';
import ScreenWraper from '../components/ScreenWraper';
export default function HomeScreen({ navigation, route }) {
    const screen = route.params.screen;
    return (
        <ScreenWraper navigation={navigation}>
            {screen == 'Home' ? <PeauDoctor></PeauDoctor> :
                screen == 'SicknessScreen' ? <Text>Sickness Info</Text> :
                    screen == 'MedicalCenterScreen' ? <Text>Medical Center</Text> :
                        screen == 'ComunityScreen' ? <Text>Community</Text> : 
                        null}
        </ScreenWraper>
    );
};