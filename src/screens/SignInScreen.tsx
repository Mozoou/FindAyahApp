import React, { useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles, globals } from '../styles';
import { AuthContext } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import Animated, { BounceIn } from 'react-native-reanimated';

interface SignInScreenProps {
  navigation: any; // Adjust the type of navigation as per your actual navigation prop type
}

export const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login}: any = useContext(AuthContext);

  const handleLogin = async () => {
    login(email, password)
  };

  const navigateToSignUp = () => {
    navigation.push('SignUp')
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar style="light" />
      <Image style={globalStyles.backgroundImage} source={require('../../assets/img/bg.png')}></Image>

      {/* Logo */}
      <View style={globalStyles.logoContainer}>
        <Animated.Image
          entering={BounceIn.delay(500).duration(1000).springify()}
          style={globalStyles.smallLogo}
          source={require('../../assets/img/logo.png')}
        />
      </View>

      {/* Title */}
      <View style={globalStyles.titleContainer}>
            <Animated.Text
              style={globalStyles.mainTitle}
              entering={BounceIn.duration(1000).springify()}
            >
              Sing In
            </Animated.Text>
      </View>

      {/* Form */}
      <View style={globalStyles.formContainer}>
          <View style={globalStyles.formImputContainer}>
              <Animated.View style={globalStyles.formControl} entering={BounceIn.delay(200).duration(1000).springify()}>
                <TextInput onChangeText={text => setEmail(text)} placeholder='Email' placeholderTextColor={'grey'} />
              </Animated.View>
              <Animated.View style={globalStyles.formControl} entering={BounceIn.delay(400).duration(1000).springify()}>
                <TextInput onChangeText={text => setPassword(text)} placeholder='Password' placeholderTextColor={'grey'} secureTextEntry />
              </Animated.View>
              <Animated.View style={{width: '100%'}} entering={BounceIn.delay(600).duration(1000).springify()}>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={[globalStyles.button, globalStyles.buttonPrimary]}
                >
                  <Text style={{color: 'white', textAlign: 'center'}}>Sing In</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                entering={BounceIn.delay(800).duration(1000).springify()}
                style={{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                <Text>Don't have an account ? </Text>
                <TouchableOpacity onPress={navigateToSignUp}>
                  <Text style={{color: globals.secondaryColor}}>Sing Up</Text>
                </TouchableOpacity>
              </Animated.View>
          </View>
      </View>

    </View>
  );
};
