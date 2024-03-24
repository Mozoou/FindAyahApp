import React from "react";
import { SettingsForm } from "../components/SettingsForm";

interface GameSettingsProps {
  navigation: any; // TODO: Add type
}

export const GameSettingsScreen: React.FC<GameSettingsProps> = ({ navigation }) => {
  return (
    <SettingsForm navigation={navigation} />
  )
};
