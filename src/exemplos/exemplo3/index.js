import {useState} from 'react'
import { View, Text, Button, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Exemplo3() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar(){
        setNumero(numero + 1);
        
    //console.log(numero);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo3</Text>
            <Button
            onPress={() => {alert('Alguem tocou no botão!')}}
            title="Alerta"
            color='#FF0000'
            accessibilitylabel="botão de Alerta"/>


            <Text style ={styles.text}>{numero}</Text>

            <TouchableOpacity style={styles.botao}
                              onPress={() =>handleIncrementar()}
            >
                <Text style={styles.txtBotao}>Incrementar Número</Text>
            </TouchableOpacity>
        </View>
    );
}
