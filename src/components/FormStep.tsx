import { StyleSheet, Text, View } from "react-native";
import { GameQuestion } from "../models/GameQuestion";
import { useMemo, useState } from "react";
import { getFontSize } from "../utils/Functions";
import { CustomRadioButton } from "./CustomRadioButton";
import { globals } from "../styles";

interface FormStepProps {
    gameQuestion: GameQuestion
    handleValueChange: (id: number) => void
}

export const FormStep: React.FC<FormStepProps> = ({ gameQuestion, handleValueChange }) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const getQuestionChoices = useMemo(() => gameQuestion.getQuestionChoices(), [gameQuestion.goodVerseAnswer]);

    const handleChoicePress = (id: number) => {
        handleValueChange(id)
        setSelectedValue(id)
    }

    let radioButtons: Array<any> = [];

    getQuestionChoices.forEach((choice) => {
        radioButtons.push(
            <CustomRadioButton
                label={choice.label}
                selected={choice.id === selectedValue}
                onSelect={() => handleChoicePress(choice.id)}
            />
        );
    });

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text 
                    style={[styles.ayah, styles.ayahToFind]}
                >
                    {gameQuestion.verseToFind.text}

                </Text>
                
                {/* <TextTicker
                    style={[styles.ayah, styles.ayahToFind]}
                    animationType='bounce'
                    // duration={}
                    // scrollSpeed={5000}
                    loop
                    isRTL={true}
                >
                    {gameQuestion.verseToFind.text}
                </TextTicker> */}
            </View>
            <View>
                <Text style={styles.label}>Choose the next verse</Text>
                {radioButtons}
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
        borderColor: globals.secondaryColor,
        marginBottom: 20
    },
    ayah: {
        fontFamily: 'Alqalam',
        textAlign: 'right',
        fontSize: getFontSize(17),
    },
    ayahToFind: {
        fontSize: getFontSize(20),
    },
    label: {
        textAlign: 'center',
    },
    questionContainer: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'right'
    }
});