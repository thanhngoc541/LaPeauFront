import React, {Component} from 'react';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
  
  render() {
    let {navigation,route}=this.props;
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit accepted={() => navigation.navigate('HomeScreen', {screen:'Home'})} />
      </Wallpaper>
    );
  }
}
