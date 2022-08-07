import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forms from './src/containers/Forms';
import AppHeader from './src/components/Header';
import Store from './src/redux/store';
import Details from './src/containers/Details';

const Stack = createNativeStackNavigator();

const linking = {
  config: {
    screens: {
      Form: '',
      Details: 'report'
    }
  }
};

const Navigation = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator
      screenOptions={{ header: AppHeader }}
    >
      <Stack.Screen
        name="Form"
        component={Forms}
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => (
  <Provider store={Store}>
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  </Provider>
);

export default App;
