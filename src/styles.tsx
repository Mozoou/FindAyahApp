import { StyleSheet } from "react-native";

export const globals = {
    primaryColor: '#3c604b',
    secondaryColor: '#b89742',
    lightColor: '#ffffff'
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    logoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        // position: 'absolute',
        marginVertical: 10,
    },
    smallLogo: {
        width: 130,
        height: 100,
    },
    formContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    titleContainer: {
        alignItems: 'center'
    },
    mainTitle: {
        color: globals.lightColor,
        fontWeight: 'bold',
        fontSize: 30
    },
    formImputContainer: {
        alignItems: 'center',
        margin: 20,
    },
    formControl: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
    },
    button: {
        borderRadius: 20,
        marginVertical: 20,
        padding: 15,
        marginTop: 10,
        elevation: 2,
    },
    buttonPrimary: {
        backgroundColor: "#b89742",
    },
    buttonSecondary: {
        backgroundColor: "#3c604b",
    }
  });
  