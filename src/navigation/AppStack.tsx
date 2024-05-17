import React, { useContext } from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GameSettingsScreen } from "../screens/GameSettingsScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, Pressable } from "react-native";
import { globals } from "../styles";
import { AuthContext } from "../context/AuthContext";
import { GameScreen } from "../screens/GameScreen";
import { GameClose } from "../components/GameClose";

const Drawer = createDrawerNavigator();

export default function AppStack() {
    const { logout }: any = useContext(AuthContext);

    const handleLogOut = () => {
        Alert.alert(
            'Do you want to logout ?',
            'You will have to sign in again !',
            [
              { text: "Stay signed in", style: 'cancel', onPress: () => { } },
              {
                text: 'Log out',
                style: 'destructive',
                onPress: () => logout(),
              },
            ]
          );
    }

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: globals.secondaryColor,
                headerTransparent: true,
                headerTitle: '',
                headerStyle: {
                    borderColor: globals.primaryColor,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Pressable style={{marginEnd: 15}} onPress={handleLogOut}>
                            <MaterialIcons name="logout" size={24} color={globals.secondaryColor} />
                        </Pressable>
                    ),
                }}
            />
            <Drawer.Screen name="Settings" component={GameSettingsScreen} />
            <Drawer.Screen name="Game" component={GameScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => <GameClose navigation={ navigation }></GameClose>,
                        gestureEnabled: false,
                        drawerItemStyle: {
                            display: 'none'
                        }
                    })}
            />
        </Drawer.Navigator>
    )
}
