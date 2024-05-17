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
    backgroundColor: globals.primaryColor,
    color: "red",
    height: "100%",
    width: "100%",
    alignItems: "center",
    // justifyContent: 'center'
  }
});
