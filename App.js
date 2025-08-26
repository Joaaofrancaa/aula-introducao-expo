import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import exemplo1 from './src/exemplos/exemplo1';

export default function App() {
  return (
    <View style={styles.container}>
      <exemplo01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
