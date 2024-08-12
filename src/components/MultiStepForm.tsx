import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FormStep } from "./FormStep";
import { GameScoreBoard } from "../models/GameScoreBoard";
import { globals } from "../styles";
import { ScrollView } from "react-native-gesture-handler";

interface MultiStepFormProps {
    data: Array<any>
    gameScoreBoard: GameScoreBoard
    navigation: any;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ data, gameScoreBoard, navigation }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedValue, setSelectedValue] = useState(0);

    const handleValueChange = (id: number) => {
        setSelectedValue(id);
    }

    const handleNextClick = () => {
        gameScoreBoard.updateScore(selectedValue, data[currentStep].goodVerseAnswer)
        setCurrentStep(currentStep + 1);
    }

    const handleFinishButton = () => {
        gameScoreBoard.updateScore(selectedValue, data[currentStep].goodVerseAnswer)
        setCurrentStep(0)
        navigation.navigate('Score', {'data': data, 'gameScoreBoard': gameScoreBoard})
    }

    const getGameQuestion = () => {
        return data[currentStep]
    }

    const islastQuestion = () => {
        return currentStep + 1 < data.length
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            </View>
            <ScrollView>
                <View style={styles.formContainer}>
                    <FormStep gameQuestion={getGameQuestion()} handleValueChange={handleValueChange} />
                </View>
                <View style={styles.submitContainer}>
                    {islastQuestion() && <Pressable
                        style={styles.button}
                        onPress={handleNextClick}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                    }
                    {!islastQuestion() && <Pressable
                        style={styles.button}
                        onPress={handleFinishButton}
                    >
                        <Text style={styles.buttonText}>Finish</Text>
                    </Pressable>
                    }
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        borderRadius: 15,
        marginHorizontal: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    submitContainer: {
        marginVertical: 30,
    },
    button: {
        alignSelf: 'center',
        width: 100,
        borderRadius: 20,
        padding: 12,
        backgroundColor: globals.secondaryColor,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});