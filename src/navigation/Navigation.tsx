import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/HomeScreen";
import { GameSettingsScreen } from "../screens/GameSettingsScreen";
import { GameScreen } from "../screens/GameScreen";
import { GameClose } from "../components/GameClose";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={options} />
                <Stack.Screen name="Settings"
                    component={GameSettingsScreen}
                    options={options} />
                <Stack.Screen name="Game" component={GameScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => <GameClose navigation={ navigation }></GameClose>,
                        gestureEnabled: false,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const options = {
    // headerBackTitleVisible: false,
    headerTransparent: true,
    title: '',
    // headerLeft: TODO:
    // headerBackImageSource: 'test'
};