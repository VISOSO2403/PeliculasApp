import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Navigator } from './src/navigate/Navigator';
import FadeScreen from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}:any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
        {/* <FadeScreen /> */}

      </AppState>
    </NavigationContainer>
  )
}

export default App