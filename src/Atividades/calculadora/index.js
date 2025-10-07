import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Index() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  function Soma() {
    const conta = parseFloat(num1) + parseFloat(num2);
    setTotal(conta.toString());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Básica</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.botao} onPress={Soma}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Resultado"
        value={total}
        editable={false}
      />
    </View>
  );
}