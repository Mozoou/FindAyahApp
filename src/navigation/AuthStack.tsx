import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackVisible: false,
                headerTransparent: true,
                headerTitle: '',
                gestureEnabled: false,
            }}
        >
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            {/* Add Register Screen */}
        </Stack.Navigator>
    )
}