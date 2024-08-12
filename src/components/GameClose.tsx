import { Alert, Pressable, StyleSheet, Text } from "react-native"
import { globals } from "../styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface GameCloseProps {
  navigation: any,
}

export const GameClose: React.FC<GameCloseProps> = ({ navigation }) => {

  const returnToHomeScreen = () => {
    Alert.alert(
      'Exit the game ?',
      'You will lose this current game',
      [
        { text: "Don't leave", style: 'cancel', onPress: () => { } },
        {
          text: 'Leave',
          style: 'destructive',
          onPress: () => {
            navigation.navigate("Home")
          }
        },
      ]
    );
  }

  return (
    <Pressable
      onPress={returnToHomeScreen}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} style={{marginLeft: 15}} color={globals.secondaryColor} />
    </Pressable>
  )
}