import { View,StyleSheet,TextInput } from "react-native"
import { Ionicons } from 'react-native-vector-icons'

export default function Cabecalho({navigation,text,setText,solicitarDados}){
    return(
        <View style={styles.cabecalho}>
                <Ionicons
                  name="chevron-back"
                  size={40}
                  color="white"
                  onPress={() => navigation.goBack()}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='Digite sua pesquisa'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={text}
                  onChangeText={(value) => setText(value)}
                  onSubmitEditing={() => solicitarDados(text)}
                />
                <Ionicons
                  name="search"
                  size={40}
                  color='white'
                  onPress={() => solicitarDados(text)}
                />
              </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30
    },
    textInput: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 10,
      paddingLeft: 10
    }
})