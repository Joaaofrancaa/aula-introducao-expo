import { StyleSheet } from 'react-native';
import {RFPercentage, rfvalue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090', // substitua pela cor desejada
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titulo: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: '##0000FF', // substitua pela cor desejada
  },
  text: {
    fontsize: 20,
  },

  text:{
    fontSize: RFPercentage(2.5),
},
botao: {
  backgroundColor: '#777',
  width: '60%',
  padding: RFPercentage(1),
  alignItems: 'center',
},
txtBotao: {
  color: '#ff0',
  fontSize: RFPercentage(2),
}
}
);

export default styles;