import { Text,ImageBackground,StyleSheet,View,Linking} from "react-native"
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context"
import {Ionicons} from "react-native-vector-icons"

export default function TelaDetalhes({navigation,route}){
    const dados = route.params.item
    return(
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
        <SafeAreaView style={{flexDirection:"row"}}>
            <Ionicons name="chevron-back" size={40} color={"white"} 
                onPress={()=>navigation.goBack()}
            />
            <Text style={{fontSize:30,color:"white"}}>Detalhes</Text>
        </SafeAreaView>

        <View style={styles.imageContainer}>
            <Image 
                source={{uri:dados.images.original.url}}
                style={{flex:1}}
            />
        </View>

        <View>
            <Text style={{fontSize:20,color:"white"}}>{dados.title}</Text>
            <Ionicons name="globe" size={40} color="white" onPress={()=>Linking.openURL(dados.images.original.url)}/>
        </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width:"100%",
        height:"50%",
        backgroundColor:"grey"
    }
})