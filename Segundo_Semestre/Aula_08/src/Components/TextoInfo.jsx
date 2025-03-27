import { View,Text,StyleSheet } from "react-native"
import {Ionicons} from "react-native-vector-icons"

export default function TextoInfo(){
    return(
        <View style={styles.headerContainer}>
            <Ionicons name="arrow-up" size={40} color="white"/>
            <Text style={styles.headerText}>Digite sua pesquisa na barra acima</Text>
          </View>
    )
}

const styles = StyleSheet.create({
  headerContainer:{
    alignItems:"center",
    margin:20
  },
  headerText:{
    color:"white",
    fontSize:20
  }
})