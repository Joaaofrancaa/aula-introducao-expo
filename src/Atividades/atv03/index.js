import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atv03() {
  const [numero, setNumero] = useState(10);

  function handleIncrementar() {
    setNumero(numero + 1);
  }

  function handleDecrementar() {
    setNumero(numero - 1);
  }

  function handleZerar() {
    setNumero(0); // mais limpo que numero - numero
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 3</Text>

      <View style={styles.container1}>
        <Text style={styles.text}>{numero}</Text>

        {/* Botões + e - lado a lado */}
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botao} onPress={handleIncrementar}>
            <Text style={styles.txtBotao}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleDecrementar}>
            <Text style={styles.txtBotao}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Botão zerar embaixo */}
        <TouchableOpacity style={styles.botaoZerar} onPress={handleZerar}>
          <Text style={styles.txtBotaoZerar}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
