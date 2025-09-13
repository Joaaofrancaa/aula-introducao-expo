import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Atv03 from './src/Atividades/atv03';

export default function App() {
  return (
    <View style={styles.container}>
      <Atv03 />
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
