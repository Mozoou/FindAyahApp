import React, { useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles, globals } from '../styles';
import { AuthContext } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import Animated, { BounceIn } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.backgroundImage} source={require('../../assets/img/bg.png')}></Image>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Animated.Image
          entering={BounceIn.delay(500).duration(1000).springify()}
          style={styles.smallLogo}
          source={require('../../assets/img/logo.png')}
        />
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
            <Animated.Text
              style={styles.mainTitle}
              entering={BounceIn.duration(1000).springify()}
            >
              Sign Up
            </Animated.Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
          <View style={styles.formImputContainer}>
              <KeyboardAwareScrollView style={{width: '100%'}}>
                <Animated.View style={styles.formControl} entering={BounceIn.delay(200).duration(1000).springify()}>
                  <TextInput placeholder='Email' placeholderTextColor={'grey'} />
                </Animated.View>
                <Animated.View style={styles.formControl} entering={BounceIn.delay(200).duration(1000).springify()}>
                  <TextInput placeholder='Username' placeholderTextColor={'grey'} />
                </Animated.View>
                <Animated.View style={styles.formControl} entering={BounceIn.delay(400).duration(1000).springify()}>
                  <TextInput placeholder='Password' placeholderTextColor={'grey'} secureTextEntry />
                </Animated.View>
                <Animated.View style={styles.formControl} entering={BounceIn.delay(400).duration(1000).springify()}>
                  <TextInput placeholder='Repeat Password' placeholderTextColor={'grey'} secureTextEntry />
                </Animated.View>
                <Animated.View style={{width: '100%'}} entering={BounceIn.delay(600).duration(1000).springify()}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonPrimary]}
                  >
                    <Text style={{color: 'white', textAlign: 'center'}}>Sing Up</Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View
                  entering={BounceIn.delay(800).duration(1000).springify()}
                  style={{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                  <Text>Already have an account ? </Text>
                  <TouchableOpacity onPress={navigateToSignIn}>
                    <Text style={{color: globals.secondaryColor}}>Sign In</Text>
                  </TouchableOpacity>
                </Animated.View>
              </KeyboardAwareScrollView>
          </View>
      </View>

    </View>
  );
};
