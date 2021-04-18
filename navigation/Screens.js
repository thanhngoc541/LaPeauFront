
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableHighlight, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetectScreen from '../screens/DetectScreen';
import LoginScreen from '../screens/LoginScreen';
const Stack = createStackNavigator();
export default function OnboardingStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ route }) => ({ title: 'Welcome ' })}
            />
            <Stack.Screen
                name="DetectScreen"
                component={DetectScreen}
                options={{ title: 'Detect Screen' }}
            />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
    );
}





