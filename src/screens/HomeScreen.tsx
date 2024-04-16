import React, { useState } from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { gameSettings } from '../components/SettingsForm';
import { FetchGameData } from '../services/network';
import { showMessage } from 'react-native-flash-message';
import { GameQuestion } from '../models/GameQuestion';

interface HomeScreenProps {
  navigation: any; // Adjust the type of navigation as per your actual navigation prop type
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const [show, setShow] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState(false);

  const startGame = async () => {
    // Add loader here
    setShow(true)
    setDisabledButtons(true)
    let data: Array<GameQuestion>|undefined = [];
    if (gameSettings.getnumberOfQuestionPerGame() > 0 && gameSettings.getSurahs().length > 0) {
      data = await FetchGameData(gameSettings);
    } else {
      showMessage({
        message: "Please set up your settings before",
        type: "warning",
      });
    }
    // remove loader
    setShow(false)
    setDisabledButtons(false)
    if (data && data.length > 0) {
      navigation.navigate('Game', {data})
    }

    // redirect to gameScreen with params fetched and start game
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/dark_logo.png')}
      />
      <ActivityIndicator size={50} animating={show} hidesWhenStopped color='#b89742'/>
      <View>
        <Pressable
          style={!disabledButtons ? [styles.button, styles.buttonSubmit] : [styles.button, styles.buttonDisabled]}
          onPress={startGame}
          disabled={disabledButtons}
        >
          <Text style={styles.textStyle}>Start</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonSubmit]}
          onPress={() => navigation.navigate('Settings')}
          disabled={disabledButtons}
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
  buttonSubmit: {
    backgroundColor: "#b89742",
  },
  buttonDisabled: {
    display: 'none'
  },
  textStyle: {
    textTransform: 'uppercase',
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'Roboto'
  },
});
