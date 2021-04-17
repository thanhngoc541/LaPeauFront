import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

import Screens from './navigation/Screens';
export default function MyStack() {
  return (
    <NavigationContainer>
      <Screens></Screens>
    </NavigationContainer>
  );
};
