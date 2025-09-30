import { StyleSheet } from 'react-native';
import {RFPercentage, rfvalue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0', // substitua pela cor desejada
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titulo: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: '#777', // substitua pela cor desejada
  },
  text: {
    fontsize: 20,
  },

  text:{
    fontSize: RFPercentage(2.5),
},

txtSaida: {
  margin: 24,
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#E53935',
},
txtEntrada: {
  borderWidth: 4,
  textAlign: 'center',
  fontSize: 22,
  borderColor: '#B71C1C',
  height: 40,
  color: '#E53935',
  borderRadius: 10,
},

button: {
  backgroundColor: '#E53935',
  height: 40,
  justifyContent: 'center',
  borderRadius: 10,
  marginTop: 20,
},
textButton: {
  fontSize: 22,
  color: '#FFCDD2',
  textAlign: 'center',
},


}
);

export default styles;