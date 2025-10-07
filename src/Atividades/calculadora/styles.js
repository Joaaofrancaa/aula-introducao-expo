import { StyleSheet } from 'react-native';
import { RFPercentage, rfvalue } from "react-native-responsive-fontsize";

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  botao: {
    backgroundColor: '#0080FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
