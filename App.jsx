import React, { lazy, Suspense } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './src/redux/store';
import Loader from './src/components/Loader';
import AppHeader from './src/components/Header';

const Forms = lazy(() => import('./src/containers/Forms'));
const Details = lazy(() => import('./src/containers/Details'));

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
  <Suspense fallback={<Loader />}>
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
  </Suspense>
);

const App = () => (
  <Provider store={Store}>
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  </Provider>
);

export default App;
