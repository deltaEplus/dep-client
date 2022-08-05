
import Forms from './src/components/Forms';
import AppHeader from './src/components/Header';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider >
    <Box h="100%" bgColor="coolGray.100">
      <AppHeader/>
      <Forms/>
      </Box>
    </NativeBaseProvider>
  );
}
