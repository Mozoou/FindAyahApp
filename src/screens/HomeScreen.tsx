import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { gameSettings } from '../components/SettingsForm';

interface HomeScreenProps {
  navigation: any; // Adjust the type of navigation as per your actual navigation prop type
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const startGame = () => {
    console.log(gameSettings);
    // Request api with settigs sessionStorage.getItem("settings")
    // Fetch data of the different game part
    // redirect to gameScreen with params fetched and start game
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/dark_logo.png')}
      />
      <View>
        <Pressable
          style={[styles.button, styles.ButtonSubmit]}
          onPress={startGame}
        >
          <Text style={styles.textStyle}>Start a new game</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.ButtonSubmit]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.textStyle}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c604b',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  button: {
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3c604b",
  },
  buttonClose: {
    backgroundColor: "#3c604b",
  },
  ButtonSubmit: {
    backgroundColor: "#b89742",
  },
  textStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
