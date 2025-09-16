import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo4 from './src/exemplos/exemplo4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo4 />
      <StatusBar style="light" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
    padding: 10,
    
  },
});
