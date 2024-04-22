import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FormStep } from "./FormStep";
import { GameScoreBoard } from "../models/GameScoreBoard";

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
        // gameScoreBoard.incrementScore()
        navigation.navigate('Home')
        gameScoreBoard.score = 0;
    }

    const getGameQuestion = () => {
        return data[currentStep]
    }

    const islastQuestion = () => {
        return currentStep + 1 < data.length
    }

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score : {gameScoreBoard.score}</Text>
            <View style={styles.formContainer}>
                <FormStep gameQuestion={getGameQuestion()} handleValueChange={handleValueChange} />
            </View>
            <View>
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
        </View>
    );
};

const styles = StyleSheet.create({
    score: {
        fontSize: 20,
        marginTop: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 40,
        marginHorizontal: 15,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 12,
        elevation: 2,
        backgroundColor: '#b89742'
    },
    buttonText: {
        color: 'white',
    }
});