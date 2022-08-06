import React from 'react';
import { NativeBaseProvider, ScrollView, KeyboardAvoidingView } from 'native-base';
import Forms from './src/containers/Forms';
import AppHeader from './src/components/Header';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppHeader />
      <ScrollView bg="#f0f2f5">
        <KeyboardAvoidingView>
          <Forms />
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}
