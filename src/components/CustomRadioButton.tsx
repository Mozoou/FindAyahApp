import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getFontSize } from '../utils/Functions';
import { globals } from '../styles';

interface CustomRadioButtonProps {
    label: string
    selected: boolean
    onSelect: any
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ label, selected, onSelect }) => (
    <TouchableOpacity
        style={[styles.radioButton,
        { backgroundColor: selected ? globals.primaryColor : '#FFF' }]}
        onPress={onSelect}
    >
        <Text
            style={[styles.radioButtonText, { color: selected ? '#FFF' : '#000' }]}
        >
            {label}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    radioButton: {
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: globals.secondaryColor,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: 280,
    },
    radioButtonText: {
        fontSize: getFontSize(17),
        fontFamily: 'NotoNaskhArabic',
        textAlign: 'right',
    },
}); 