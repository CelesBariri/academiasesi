import { Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";

export default function Cadastro()
{
    function Cadastrar() {
        setCadastro(false);
        setCadastro(false);

    }
    
    function Voltar() {

    }
    return(
        <View>
            <TextInput />
            <TextInput />
            <TouchableOpacity onPress={Cadastrar}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}