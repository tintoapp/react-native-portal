import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PortalProvider } from '@gorhom/portal';
import HomeScreen from './screens/HomeScreen';
import BasicScreen from './screens/BasicScreen';
import ModalScreen from './screens/ModalScreen';
import PopoverScreen from './screens/PopoverScreen';
import MotiScreen from './screens/MotiScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PortalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Basic" component={BasicScreen} />
          <Stack.Screen name="Modal" component={ModalScreen} />
          <Stack.Screen name="Popover" component={PopoverScreen} />
          <Stack.Screen name="Moti" component={MotiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
};

export default App;
