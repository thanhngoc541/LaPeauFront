import React from 'react';
import { View, Text } from "react-native";
import Feature from './Feature';
const FeaturesSection = () => (

   <View style={{ backgroundColor: '#27AAE1', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Feature src={require('../assets/information.png')} text={'Sickness Info'}></Feature>
      <Feature src={require('../assets/hospital.png')} text={'Medical Center'}></Feature>
      <Feature src={require('../assets/community.png')} text={'Community'}></Feature>
   </View>)
export default FeaturesSection;