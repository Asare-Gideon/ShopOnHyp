import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import HomeNavigation from './navigation/HomeNavigation';
import InitialNavigation from './navigation/InitialNavigation';
import Initial from './screens/InitialScreen/Initial';

export default function Main() {
  const isLoadingComplete = useCachedResources();
  const [isLogIn, setIsLogIn] = React.useState<boolean>(true)

  if (!isLoadingComplete) {
    return null;
  } else {
   if(isLogIn){
return (
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
    );
   }else{
return (
        <NavigationContainer>
          <InitialNavigation />
        </NavigationContainer>
    );
   } 
  }
}