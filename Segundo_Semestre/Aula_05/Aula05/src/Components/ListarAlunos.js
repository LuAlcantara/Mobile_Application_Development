import { FlatList, View, Text } from "react-native";
import Alunos from "./Alunos";

export default function ListarAlunos({alunos}) {
    return (
        <View>
            <FlatList
                data={Alunos}
                renderItem={({item}) => {
                    return (
                        <Text>Nome do Aluno:{item.nomeAluno} - N° Faltas:{item.nFaltas}</Text>
                    )
                }}
                
            />
        </View>
    )
}