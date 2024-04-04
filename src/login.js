import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(setLogado)
{
    const[login, setLogin] = useState("");
    const[Senha, setSenha] = useState("");

    function Login() {
        
    }

    return(
        <View>
            <TextInput />
            <TextInput />
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}