import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/HomeScreen";
import { GameSettingsScreen } from "../screens/GameSettingsScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={GameSettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}