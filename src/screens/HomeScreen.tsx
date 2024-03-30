import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { gameSettings } from '../components/SettingsForm';
import { FetchGameData } from '../services/network';
import { showMessage } from 'react-native-flash-message';

interface HomeScreenProps {
  navigation: any; // Adjust the type of navigation as per your actual navigation prop type
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const startGame = async () => {
    // Request api with settigs
    // Fetch data of the different game part
    // Add loader here
    let data = [];
    if (gameSettings.getnumberOfQuestionPerGame() > 0 && gameSettings.getSurahs().length > 0) {
      data = await FetchGameData(gameSettings);
    } else {
      showMessage({
        message: "Please set up your settings before",
        type: "warning",
      });
    }
    // Hide loader
    if (data.length > 0) {
      navigation.navigate('Game', {data: data})
    }

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
          <Text style={styles.textStyle}>Start</Text>
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
    justifyContent: 'center'
  },
  logo: {
    width: 400,
    height: 400,
    // marginTop: 100,
  },
  button: {
    borderRadius: 20,
    marginVertical: 20,
    padding: 15,
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
    textTransform: 'uppercase',
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'Roboto'
  },
});
