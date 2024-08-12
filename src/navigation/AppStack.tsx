import React, { useContext } from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GameSettingsScreen } from "../screens/GameSettingsScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, Image, Pressable, View } from "react-native";
import { globalStyles, globals } from "../styles";
import { AuthContext } from "../context/AuthContext";
import { GameScreen } from "../screens/GameScreen";
import { GameClose } from "../components/GameClose";
import { ScoreScreen } from "../screens/ScoreScreen";

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
                headerTitle: () => (
                    <View>
                        <Image
                            style={globalStyles.smallLogo}
                            source={require('../../assets/img/logo.png')}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: globals.primaryColor,
                    height: 120,
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Pressable style={{ marginEnd: 15 }} onPress={handleLogOut}>
                            <MaterialIcons name="logout" size={24} color={globals.secondaryColor} />
                        </Pressable>
                    ),
                }}
            />
            <Drawer.Screen name="Settings" component={GameSettingsScreen} />
            <Drawer.Screen name="Game" component={GameScreen}
                options={({ navigation }) => ({
                    headerLeft: () => <GameClose navigation={navigation}></GameClose>,
                    gestureEnabled: false,
                    swipeEnabled: false,
                    drawerItemStyle: {
                        display: 'none'
                    }
                })}
            />
            <Drawer.Screen name="Score" component={ScoreScreen}
                options={() => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => null,
                    gestureEnabled: false,
                    swipeEnabled: false,
                    drawerItemStyle: {
                        display: 'none'
                    }
                })}
            />
        </Drawer.Navigator>
    )
}
