import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { MultiStepForm } from "../components/MultiStepForm";
import { GameScoreBoard } from "../models/GameScoreBoard";

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
    backgroundColor: "#3c604b",
    color: "red",
    height: "100%",
    width: "100%",
    alignItems: "center",
    // justifyContent: 'center'
  }
});
