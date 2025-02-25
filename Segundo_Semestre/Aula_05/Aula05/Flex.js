import { View, Text, StyleSheet } from "react-native";
import Quadrado from "./src/Components/Quadrado";

export default () => {
    return(
        <View style={estilo.container}>
            <View style={{
                backgroundColor: 'yellow',
                flex: 1,
                justifyContent: 'space-around',
            }}>

                <Quadrado/>
                <Quadrado cor='#ff801a'/>
                <Quadrado cor='#dd22c1'/>
                <Quadrado cor='#8312ed'/>
                <Quadrado cor='#36c9a7'/>
        </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }
})