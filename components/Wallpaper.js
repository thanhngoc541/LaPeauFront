import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../assets/background.jpg';

export default class Wallpaper extends Component {
  render() {
    const flex=this.props.flex==null?1:this.props.flex;
    return (
      <ImageBackground style={[styles.picture,{flex:flex}]} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
