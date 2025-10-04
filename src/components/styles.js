import { StyleSheet } from 'react-native';
import { RFPercentage, rfvalue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    // flex: 1, 
    backgroundColor: '#ff0', // substitua pela cor desejada
    // alignItems: 'center',
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

  text: {
    fontSize: RFPercentage(2.5),
  },

  txtSaida: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000ff',
  },
  txtEntrada: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 16,
    borderColor: '#7a7777ff',
    height: 40,
    color: '#080707ff',
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#5b2ffaff',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  textButton: {
    fontSize: 22,
    color: '#ffffffff',
    textAlign: 'center',
  },

  paragraph: {
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff0000ff',
  },

}
);

export default styles;