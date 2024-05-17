import React, { useEffect, useRef, useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { FetchAllSurah } from "../services/network";
import { GameSetting } from "../models/GameSetting";
import { RadioFormGroup, RadioObject } from "../components/RadioFormGroup";
import { ModalComponent, ModalRef } from "../components/ModalComponent";
import { BouncyCheckBoxGroup } from "../components/BouncyCheckBoxGroup";
import { sessionStorage } from "../utils/Storage";
import { globals } from "../styles";

const sessionSettingsParams = sessionStorage.getItem("settings");
let numberOfQuestionPerGame = 0;
let surahs: Array<number> = [];

if (sessionSettingsParams) {
    numberOfQuestionPerGame = sessionSettingsParams.numberOfQuestionPerGame;
    surahs = sessionSettingsParams.surahs;
}

export const gameSettings = new GameSetting(numberOfQuestionPerGame, surahs);

interface SettingsFormProps {
    navigation: any,
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ navigation }) => {
    const modalRef = useRef<ModalRef>(null);
    // const [isLoading, setLoading] = useState(true);
    const [allSurahsData, setAllSurahsData] = useState<Array<number>>(gameSettings.getSurahs());
    const [selectedId, setSelectedId] = useState<number>(gameSettings.getnumberOfQuestionPerGame());

    const radioNumberOfQuestionPerGame: Array<RadioObject> = [
        {
            id: 3,
            label: "3",
            value: 3,
        },
        {
            id: 5,
            label: "5",
            value: 5,
        },
        {
            id: 10,
            label: "10",
            value: 10,
        },
    ];

    const setNumberOfQuestionPerGameSetting = (id: number) => {
        setSelectedId(id);
        const value: number = radioNumberOfQuestionPerGame.find((radio) => radio.id === id)?.value;
        gameSettings.setnumberOfQuestionPerGame(value);

    }

    const modalContent = () => {
        return (
            <>
                <BouncyCheckBoxGroup data={allSurahsData} pressedItems={gameSettings.getSurahs()} onPress={onSelectSurah} />
            </>
        )
    }

    const onSelectSurah = (isPressed: boolean, surahNumber: number) => {
        isPressed ? gameSettings.addSurah(surahNumber) : gameSettings.removeSurah(surahNumber);
    }

    const handleOpenModal = () => {
        const dataToPass = allSurahsData;
        modalRef.current?.openModal(dataToPass);
    };

    const getSurah = async () => {
        // TODO: add orderby
        const data: Array<number> = await FetchAllSurah();
        setAllSurahsData(data);
    };

    const saveParams = () => {
        sessionStorage.setItem('settings', gameSettings);
        navigation.goBack();
    };

    useEffect(() => {
        getSurah();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Configure Your Quran Quiz Settings</Text>
                <View style={styles.formGroup}>
                    <RadioFormGroup
                        label="How many questions do you want ?"
                        radioButtonsGroup={radioNumberOfQuestionPerGame}
                        selectedValue={selectedId}
                        setSelectedId={setNumberOfQuestionPerGameSetting}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={handleOpenModal}
                    >
                        <Text style={styles.textStyle}>Select surahs</Text>
                    </Pressable>
                    <ModalComponent ref={modalRef} modalContent={modalContent} />
                </View>
                    <Pressable
                        style={[styles.button, styles.ButtonSubmit]}
                        onPress={saveParams}
                    >
                        <Text style={styles.textStyle}>Save</Text>
                    </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globals.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto"
    },
    formContainer: {
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: "70%",
        marginHorizontal: 50,
        borderRadius: 30,
        alignItems: "center",
    },
    title: {
        color: globals.primaryColor,
        fontSize: 23,
        marginVertical: 25,
        fontFamily: "Roboto",
    },
    modalTitle: {
        color: globals.secondaryColor,
        fontSize: 23,
        marginVertical: 25,
    },
    formGroup: {
        marginLeft: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
    },
    button: {
        borderRadius: 20,
        padding: 12,
        elevation: 2,
    },
    buttonOpen: {
        marginTop: 10,
        backgroundColor: globals.primaryColor,
    },
    buttonClose: {
        backgroundColor: globals.primaryColor,
    },
    ButtonSubmit: {
        backgroundColor: globals.secondaryColor,
    },
    textStyle: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "right",
    },
});
