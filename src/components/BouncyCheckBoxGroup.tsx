import { FlatList, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globals } from "../styles";

interface RadioFormGroupProps {
  data: Array<any>
  pressedItems: Array<number>
  onPress: (isPressed: boolean, id: number) => void
}

export const BouncyCheckBoxGroup: React.FC<RadioFormGroupProps> = ({ data, pressedItems, onPress }) => {

  const isChecked = (id: number) => {
    if (pressedItems) {
      return pressedItems.includes(id);
    }
  }

  return (
    <FlatList
      numColumns={1}
      style={styles.list}
      data={data}
      keyExtractor={({ number }) => number}
      renderItem={({ item, index }) => {
        return (
          <View style={[{ backgroundColor: '#ffffff', flex: 1, padding: 10 }]}>
            <BouncyCheckbox
              style={styles.centeredView}
              textStyle={styles.textStyle}
              fillColor={globals.secondaryColor}
              unfillColor="#FFFFFF"
              text={`${item.number} - ${item.name}`}
              onPress={(isPressed) => { onPress(isPressed, item.number) }}
              isChecked={isChecked(item.number)}
            />
          </View>
        )
      }}
    />
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 70
    
  },
  list: {
    width: "100%",
    borderRadius: 10,
  },
  textStyle: {
    color: globals.primaryColor,
    fontWeight: "bold",
    textAlign: 'right',
    fontSize: 17,
    textDecorationLine: "none",
  },
});
