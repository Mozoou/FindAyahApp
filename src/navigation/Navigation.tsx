import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Navigation() {
    const {jwtToken}: any = useContext(AuthContext);

    return (
        <NavigationContainer>
            { jwtToken ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}
