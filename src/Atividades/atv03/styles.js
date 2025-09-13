import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090', 
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: RFPercentage(2),
     gap:RFPercentage(10)
  },

  container1: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFPercentage(2),
     gap:RFPercentage(5)
  },

  titulo: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: '#000000ff', 
    marginBottom: RFPercentage(3),
  },

  text: {
    fontSize: RFPercentage(2.5),
    color: '#fff',
    textAlign: 'center',
  },

  // container para os dois botões lado a lado
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: RFPercentage(2),
    gap:RFPercentage(5),
  },

  botao: {
    backgroundColor: '#777',
    flex: 1,
    marginHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1),
    alignItems: 'center',
  },

  txtBotao: {
    color: '#FFD700',
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
  },

  // botão "zerar" embaixo
  botaoZerar: {
    backgroundColor: '#B22222',
    width: '100%',
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1),
    alignItems: 'center',
  },

  txtBotaoZerar: {
    color: '#fff',
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    marginHorizontal: RFPercentage(2),
  },
});

export default styles;
