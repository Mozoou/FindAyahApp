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

    return (
        <View style={{padding: 20}}>
            <View style={styles.titleContainer}>
                <Text 
                    style={styles.ayah}
                >
                    {gameQuestion.verseToFind.text}
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Choose the next verse</Text>
                {getQuestionChoices.map((choice) => (
                    <CustomRadioButton
                        key={choice.id}
                        label={choice.label}
                        selected={choice.id === selectedValue}
                        onSelect={() => handleChoicePress(choice.id)}
                    />
                ))}
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
        borderRadius: 8,
        borderColor: globals.secondaryColor,
        marginBottom: 20
    },
    ayah: {
        fontFamily: 'NotoNaskhArabic',
        textAlign: 'right',
        fontSize: getFontSize(18),
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