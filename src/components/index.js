import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Index() {

    const [textoEscrito, setTextoEscrito] = useState('');
    const [mensagem, setMensagem] = useState('Texto programado');
  return(
    <View style={styles.container} >
      <Text style={styles.paragraph} >
        Exemplo 4
      </Text>

      <Text style={styles.txtSaida}>
        {mensagem}
        </Text>

    <TextInput style={styles.txtEntrada}
    onChangeText={ (entrada) => setTextoEscrito(entrada)}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFCDD2',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#B71C1C',
  },
});
