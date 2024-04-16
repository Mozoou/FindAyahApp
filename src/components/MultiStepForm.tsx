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
    
    const handleNextClick = () => {
        // Augemeter / diminuer le score en fonction de la réponse
        gameScoreBoard.incrementScore()
        setCurrentStep(currentStep + 1);
        // Rendre le bon Form
    }

    const handleFinishButton = () => {
        // gameScoreBoard.incrementScore()
        navigation.navigate('Home')
    }

    const getGameQuestion = () => {
        return data[currentStep]
    }

    const islastQuestion = () => {
        return currentStep+1 < data.length
    }

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score : {gameScoreBoard.score}</Text>
            <View style={styles.formContainer}>
                {/* Rendre le form en question avec le bon step */}
                <FormStep gameQuestion={getGameQuestion()} />
            </View>
            <View>
            {islastQuestion() && <Pressable
                style={styles.button}
                onPress={handleNextClick}
                >
                <Text>Next</Text>
            </Pressable>
            }
             {!islastQuestion() && <Pressable
                style={styles.button}
                onPress={handleFinishButton}
                >
                <Text>Finish</Text>
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
        padding: 20,
        marginHorizontal: 15,
        paddingBottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 12,
        elevation: 2,
        backgroundColor: '#b89742'
    },
});