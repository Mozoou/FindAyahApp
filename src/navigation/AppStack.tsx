import React, { useContext } from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GameSettingsScreen } from "../screens/GameSettingsScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { baseStyle, globals } from "../baseStyle";
import { AuthContext } from "../context/AuthContext";

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
                    borderColor: '#3c604b',
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Pressable style={{marginEnd: 15}} onPress={handleLogOut}>
                            <MaterialIcons name="logout" size={24} color="#b89742" />
                        </Pressable>
                    ),
                }}
            />
            <Drawer.Screen name="Settings" component={GameSettingsScreen} />
            {/* <Drawer.Screen name="Game" component={GameScreen}
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => <GameClose navigation={ navigation }></GameClose>,
                        gestureEnabled: false,
                    })}
            /> */}
        </Drawer.Navigator>
    )
}

// const styles = StyleSheet.create({

// })