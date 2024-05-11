import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import { showMessage } from "react-native-flash-message";
import { Login } from "../services/network";

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  jwtToken: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<string|null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    const token = await Login(email, password);
    if (token) {
      await AsyncStorage.setItem('jwtToken', token);
      setJwtToken(token)
    } else {
      showMessage({
        message: "Invalid credentials",
        type: "danger",
      });
    }
    setIsLoading(false)
  };

  const logout = async () => {
    setIsLoading(true)
    setJwtToken(null);
    await AsyncStorage.removeItem('jwtToken');
    setIsLoading(false)
  }

  const isLogged = async () => {
    try {
      setIsLoading(true)
      let token = await AsyncStorage.getItem('jwtToken');
      setJwtToken(token);
      setIsLoading(false)
    } catch (error) {
      'Erreur fetch jwt'
    }
  }

  useEffect(() => {
    isLogged();
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, jwtToken }}>
      {children}
    </AuthContext.Provider>
  )
}