import { StyleSheet, Text } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

interface RadioFormGroupProps {
    label: string,
    radioButtonsGroup: Array<RadioObject>
    selectedValue: number
    setSelectedId: Function
}

export interface RadioObject {
    id: number,
    label: string,
    value: any,
}

export const RadioFormGroup: React.FC<RadioFormGroupProps> = ({ label, radioButtonsGroup, selectedValue, setSelectedId }) => {

    return (
        <>
            <Text style={styles.label}>
                {label}
            </Text>
            <RadioGroup
                layout="row"
                radioButtons={radioButtonsGroup}
                onPress={setSelectedId}
                selectedId={selectedValue}
            />
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
    },
});
