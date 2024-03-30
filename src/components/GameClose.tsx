import { Alert, Pressable, StyleSheet, Text } from "react-native"

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
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: () => navigation.navigate("Home"),
        },
      ]
    );
  }

  return (
    <Pressable
      style={[styles.button, styles.buttonDismiss]}
      onPress={returnToHomeScreen}
    >
      <Text style={styles.exitTextButton}>Leave</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginVertical: 20,
    padding: 8,
    marginTop: 10,
    elevation: 2,
  },
  buttonDismiss: {
    backgroundColor: "red",
  },
  exitTextButton: {
    color: '#FFFFFF'
  },
})