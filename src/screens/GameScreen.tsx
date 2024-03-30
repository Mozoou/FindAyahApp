import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { GameQuestion } from "../models/GameQuestion";
import { GameQuestionInterface } from "../interfaces/GameQuestionInterface";

interface GameProps {
  route: any; // TODO: Add type
  navigation: any;
}

export const GameScreen: React.FC<GameProps> = ({ route, navigation }) => {
  const data : Array<any> = route.params;
  let gameQuestions: Array<GameQuestionInterface> = [];

  for (let index = 0; index < data['data'].length; index++) {
    gameQuestions.push(new GameQuestion(data['data'][index].ayah, data[index].goodAyah, data[index].wrongAyahs, index + 1))
  }

  console.log(gameQuestions);
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* <Text style={styles.ayah}>{data[0]['ayah']['data']['text']}</Text> */}
      </View>
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
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    width: "90%",
    marginTop: 100,
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: 'center'
  },
  ayah: {
    // color: '#b89742',
    fontFamily: 'Alqalam',
    fontSize: 30
  }
});
