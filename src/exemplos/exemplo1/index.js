import { View, Text } from 'react-native';

import styles from './styles';

export default function Exemplo1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>exemplo 1</Text>
            <Text style ={styles.text}>Introdução React Native com Expo</Text>
        </View>
    )
}

