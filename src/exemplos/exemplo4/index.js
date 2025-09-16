import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo4() {

    const[texto, setTexto] = useState('');
    const[txt2, setTxt2] = useState('Valor Inicial');


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput 
                onChangeText={setTexto}
                placeholder="texto de fundo"
                keyboardtype='number-pad'
                // editable={false}
                // multiline
                // numberoOfLines={4}
                maxLength={7}
                // secureTextEntry
                style={styles.input}
                />

                <Text style={styles.txt}>{txt2}</Text>
                <TextInput 
                value={txt2}
                onChangeText={setTxt2}
                placeholder="Digite sua mensagem"
                keyboardtype='number-pad'
                style={styles.input}
                />

                <TouchableOpacity>
                    style={styles.botao}
                    onPress={() => {}}
                
                <Text style={styles.txtBotao}>Exibir texto</Text>    
                </TouchableOpacity>

        </View>
    )
}

