import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ListarAlunos from './src/Components/ListarAlunos';

export default function App() {
  
  const [numero, configNumero] = useState(15);
  const [nomeCliente, setNomeCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");
  const [emailCliente, setemailCliente] = useState("");
  
    function exibir() {
      let ola = nomeCliente + " " + enderecoCliente + " " + emailCliente;
      alert
    }

  return (
    <View style={styles.container}>
      <Text>Aula de Mobile</Text>
      <Text>Aula de número 5</Text>
      <Text style={styles.fontG}>{numero}</Text>
      <TextInput 
        placeholder='Digite seu nome'
        value={nomeCliente}
        onChangeText={(value)=>setNomeCliente(value)}
      />
      <Text>{nomeCliente}</Text>

      <TextInput 
        placeholder='Digite seu endereço'
        value={enderecoCliente}
        onChangeText={(value)=>setEnderecoCliente(value)}
      />
      <Text>{enderecoCliente}</Text>

      <TextInput 
        placeholder='Digite seu e-mail'
        value={emailCliente}
        onChangeText={(value)=>setemailCliente(value)}
      />
      <Text>{emailCliente}</Text>

      <Button title='Enviar'/>

      
      {/*<Button title='Incrementar'onPress={()=>configNumero(numero+1)}/>
      <Button title='Decrementar'onPress={()=>configNumero(numero-1)}/>
      <ListarAlunos/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontG: {
    fontSize: 40,
  }
});
