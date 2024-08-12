import React from "react";
import { StyleSheet, View } from "react-native";
import { MultiStepForm } from "../components/MultiStepForm";
import { GameScoreBoard } from "../models/GameScoreBoard";
import { globals } from "../styles";

interface GameProps {
  route: any; // TODO: Add type
  navigation: any;
}

let gameScoreBoard = new GameScoreBoard();

export const GameScreen: React.FC<GameProps> = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View style={styles.container}>
        <MultiStepForm data={data.data} gameScoreBoard={gameScoreBoard} navigation={navigation}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: globals.primaryColor,
    paddingVertical: 30
  }
});
