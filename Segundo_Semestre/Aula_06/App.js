import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const[nomeAluno,setNomeAluno] = useState('')
  const[emailAluno,setEmailAluno] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Image 
        source={require("./assets/fiaplogo.png")}
        style={styles.image}
        />
      </View>
      
      <View style={{flex:1, gap:20}}>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          keyboardType='default'
          maxLength={10}
          value={nomeAluno}
          onChangeText={(text)=>setNomeAluno(text)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          maxLength={30}
          value={emailAluno}
          onChangeText={(text)=>setEmailAluno(text)}
        />
        <Button 
        style={styles.button}
        title='Enviar'
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image:{
    resizeMode: 'center'
  },
  input:{
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 20,
    paddingLeft: 10 
  }
  
});
