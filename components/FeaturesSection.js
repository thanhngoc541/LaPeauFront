import React from 'react';
import { View, Text } from "react-native";
import Feature from './Feature';
const FeaturesSection = (props) => (

   <View style={{ backgroundColor: '#27AAE1', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Feature onPress={() => { props.navigation.navigate('HomeScreen', { screen:'SicknessScreen' }) }} src={require('../assets/information.png')} text={'Sickness Info'}></Feature>
      <Feature onPress={() => { props.navigation.navigate('HomeScreen', { screen:'MedicalCenterScreen' }) }} src={require('../assets/hospital.png')} text={'Medical Center'}></Feature>
      <Feature onPress={() => { props.navigation.navigate('HomeScreen', { screen:'ComunityScreen' }) }} src={require('../assets/community.png')} text={'Community'}></Feature>
   </View>)
export default FeaturesSection;