import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Navigator } from './src/navigate/Navigator';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App