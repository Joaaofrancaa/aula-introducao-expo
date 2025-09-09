import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo3 from './src/exemplos/exemplo3';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo3 />
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
