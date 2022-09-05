import React, { lazy, Suspense } from 'react';
import { Center, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';
import Store from './src/redux/store';
import Loader from './src/components/Loader';
import AppHeader from './src/components/Header';

const bg = require('./assets/bg.jpg');

const Forms = lazy(() => import('./src/containers/Forms'));
const Details = lazy(() => import('./src/containers/Details'));

const Stack = createNativeStackNavigator();

const linking = {
  config: {
    screens: {
      'DeltaE+': '',
      Report: 'report'
    }
  }
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

const Navigation = () => (
  <Suspense fallback={<Center h="100%"><Loader /></Center>}>
    <ImageBackground
      style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      source={bg}
    >
      <NavigationContainer theme={navTheme} linking={linking}>
        <Stack.Navigator
          screenOptions={{ header: AppHeader }}
        >
          <Stack.Screen
            name="DeltaE+"
            component={Forms}
          />
          <Stack.Screen
            name="Report"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
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
