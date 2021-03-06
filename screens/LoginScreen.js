import React, { Component } from 'react';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';
import Camera from '../components/Camera';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
export default class LoginScreen extends Component {

  render() {
    let { navigation, route } = this.props;
   
    return (
      <Wallpaper>
        <Logo />
        <Camera navigation={navigation} />
      </Wallpaper>
    );
  }
}
