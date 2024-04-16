import { StyleSheet, Text, View } from "react-native";
import { GameQuestion } from "../models/GameQuestion";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useState } from "react";
import { getFontSize } from "../utils/Functions";

interface FormStepProps {
    gameQuestion: GameQuestion
}

export const FormStep: React.FC<FormStepProps> = ({ gameQuestion }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChoicePress = (id: string) => {
        setSelectedValue(id)
    }

    const getRadioButtons = () => {
        return gameQuestion.getQuestionChoices();
    }

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={[styles.ayah, styles.ayahToFind]}>{gameQuestion.verseToFind.text}</Text>
            </View>
            <View>
                <RadioGroup
                    layout='column'
                    radioButtons={getRadioButtons()}
                    onPress={(id) => handleChoicePress(id)}
                    selectedId={selectedValue}
                    labelStyle={styles.ayah}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 15,
        borderWidth: 2,
        borderColor: '#b89742',
        marginBottom: 20
    },
    ayah: {
      fontFamily: 'Alqalam',
      textAlign: 'right',
      fontSize: getFontSize(17)
    },
    ayahToFind: {
      fontSize: getFontSize(20),
    }
  });