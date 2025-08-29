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
}
);

export default styles;