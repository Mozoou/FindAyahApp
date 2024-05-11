import React, { useContext, useState } from 'react';
import { Button, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { baseStyle, globals } from '../baseStyle';
import { AuthContext } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';

interface SignUpScreenProps {
  navigation: any; // Adjust the type of navigation as per your actual navigation prop type
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login}: any = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      login(email, password)
    } catch (e) {
    }
  };

  const navigateToSignIn = () => {
    navigation.push('SignIn')
  }

  return (
    <View style={baseStyle.container}>
      <StatusBar style="light" />
      <Image style={baseStyle.backgroundImage} source={require('../../assets/img/bg.png')}></Image>

      {/* Logo */}
      <View style={baseStyle.logoContainer}>
        <Animated.Image
          entering={BounceIn.delay(500).duration(1000).springify()}
          style={baseStyle.smallLogo}
          source={require('../../assets/img/logo.png')}
        />
      </View>

      {/* Title / Form */}
      <View style={baseStyle.formContainer}>
          {/* Title */}
          <View style={baseStyle.titleContainer}>
            <Animated.Text
              style={baseStyle.mainTitle}
              entering={BounceIn.duration(1000).springify()}
            >
              Sign Up
            </Animated.Text>
          </View>

          {/* Form */}
          <View style={baseStyle.formImputContainer}>
              <Animated.View style={baseStyle.formControl} entering={BounceIn.delay(200).duration(1000).springify()}>
                <TextInput placeholder='Email' placeholderTextColor={'grey'} />
              </Animated.View>
              <Animated.View style={baseStyle.formControl} entering={BounceIn.delay(200).duration(1000).springify()}>
                <TextInput placeholder='Username' placeholderTextColor={'grey'} />
              </Animated.View>
              <Animated.View style={baseStyle.formControl} entering={BounceIn.delay(400).duration(1000).springify()}>
                <TextInput placeholder='Password' placeholderTextColor={'grey'} secureTextEntry />
              </Animated.View>
              <Animated.View style={baseStyle.formControl} entering={BounceIn.delay(400).duration(1000).springify()}>
                <TextInput placeholder='Repeat Password' placeholderTextColor={'grey'} secureTextEntry />
              </Animated.View>
              <Animated.View style={{width: '100%'}} entering={BounceIn.delay(600).duration(1000).springify()}>
                <TouchableOpacity
                  style={[baseStyle.button, baseStyle.ButtonSecondary]}
                >
                  <Text style={{color: 'white', textAlign: 'center'}}>Sing Up</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                entering={BounceIn.delay(800).duration(1000).springify()}
                style={{width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                <Text>Already have an account ? </Text>
                <TouchableOpacity onPress={navigateToSignIn}>
                  <Text style={{color: globals.secondaryColor}}>Sign In</Text>
                </TouchableOpacity>
              </Animated.View>
          </View>
      </View>

    </View>
  );
};
