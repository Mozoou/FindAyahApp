import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet
} from 'react-native';
import { getFontSize } from '../utils/Functions';
import TextTicker from 'react-native-text-ticker';

interface CustomRadioButtonProps {
    label: string
    selected: boolean
    onSelect: any
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ label, selected, onSelect }) => (
    <TouchableOpacity
        style={[styles.radioButton,
        { backgroundColor: selected ? '#3c604b' : '#FFF' }]}
        onPress={onSelect}
    >
        <TextTicker
            style={[styles.radioButtonText, { color: selected ? '#FFF' : '#000' }]}
            animationType='scroll'
            scrollSpeed={500}
            isRTL={true}
        >
            {label}
        </TextTicker>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
    },
    radioButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#b89742',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: 280,
    },
    radioButtonText: {
        fontSize: getFontSize(17),
        fontFamily: 'Alqalam',
        textAlign: 'right',
    },
}); 