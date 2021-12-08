import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './app/store/store';


export default function App() {
return(
  <SafeAreaProvider>
    <Provider store={store}>
    <Main />
    </Provider>
  </SafeAreaProvider>
)
}
