import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SmoodRestoPage } from './page/SmoodRestoPage/SmoodRestoPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <SmoodRestoPage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
