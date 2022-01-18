import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import AdminNavigation from "./navigation/AdminNavigation";
import HomeNavigation from "./navigation/HomeNavigation";
import InitialNavigation from "./navigation/InitialNavigation";
import RidersNavigation from "./navigation/RidersNavigation";
import VendorNavigation from "./navigation/VendorNavigation";
import Initial from "./screens/UsersScreens/InitialScreen/Initial";

export default function Main() {
  const isLoadingComplete = useCachedResources();
  const [isLogIn, setIsLogIn] = React.useState<boolean>(true);
  const [isUser, setIsUser] = React.useState("admin");

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isLogIn) {
      if (isUser === "vendor") {
        return (
          <NavigationContainer>
            <VendorNavigation />
          </NavigationContainer>
        );
      } else if (isUser === "rider") {
        return (
          <NavigationContainer>
            <RidersNavigation />
          </NavigationContainer>
        );
      }else if(isUser === "user"){
      return (
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
      );
}else if(isUser === "admin"){
return (
        <NavigationContainer>
          <AdminNavigation />
        </NavigationContainer>
      );
}

    } else {
      return (
        <NavigationContainer>
          <InitialNavigation />
        </NavigationContainer>
      );
    }
  }
}
