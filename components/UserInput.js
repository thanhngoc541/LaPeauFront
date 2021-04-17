import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, TextInput, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class UserInput extends Component {
  render() {
    let width =
      this.props.width == null ? (DEVICE_WIDTH - 40):this.props.width;
    let  left=this.props.tleft == null ? 0:this.props.tleft;
    return (
      <View style={[styles.inputWrapper,{marginLeft:left}]}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={[styles.input, { width:width }]}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};



const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
