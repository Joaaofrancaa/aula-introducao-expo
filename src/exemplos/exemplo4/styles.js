import { StyleSheet } from 'react-native';
import {RFPercentage, rfvalue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF ', // substitua pela cor desejada
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  titulo: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: '#888000', // substitua pela cor desejada
  },
  txt: {
    fontsize: RFPercentage(2,5),
  },

  input:{
    borderWidth: RFPercentage(0.5),
    borderColor: 'darkslategrey',
    width: '80%',
    borderRadius: RFPercentage(1.5),
    padding: RFPercentage(1.5),
    fontsize: RFPercentage(2),
    textAlign: 'center',
  },

  botao: {
    backgroundColor: "#0d47a1",
    width: '50%',
    borderRadius: RFPercentage(1),
    padding: RFPercentage(1),
    alignItems: 'center',
    marginTop:RFPercentage(2)
  }
}
);

export default styles;