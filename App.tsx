import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSignOrLog from './screens/FirstSignOrLog';
import LanguageInputInfo from './screens/LanguageInputInfo';
import FirstProfileInputInfo from './screens/FirstProfileInputInfo';
import SecondProfileInputInfo from './screens/SecondProfileInputInfo';
import Login from './screens/Login';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstSignOrLog" component={FirstSignOrLog} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageInputInfo" component={LanguageInputInfo} options={{ headerShown: false }} />
        <Stack.Screen name="FirstProfileInputInfo" component={FirstProfileInputInfo} options={{ headerShown: false }} />
        <Stack.Screen name="SecondProfileInputInfo" component={SecondProfileInputInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;