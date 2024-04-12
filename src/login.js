import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

export default function Login({ setLogado, setCadastro }) {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");    

    function Login() {
        Keyboard.dismiss();
        if (login == "rafael@mm" && senha == "1234") {
            setLogado(true);
        }
    }

    function Cadastrar()
    {
        setLogado( true );
        setCadastro( true );
    }

    return (
        <View style={css.container}>
            <Header />
            <Text style={css.titulo}>LOGIN</Text>
                <TextInput
                    style={css.login}
                    placeholder="Insira seu e-mail:"
                    onChangeText={(digitado) => setLogin(digitado)}
                    value={login}
                    TextInput={login}
                />
                <TextInput
                    style={css.senha}
                    placeholder="Insira sua Senha:"
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                    TextInput={senha}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={css.btn} onPress={Login}>
                    <Text style={css.btnText}>ENTRAR</Text>
                </TouchableOpacity>                
                <View style={css.boxCadastro}>
                    <View style={css.boxCadastroItem}>
                        <Text>Não possui uma conta?</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={css.btnCadastro} onPress={Cadastrar}>
                            <Text style={css.btnCadastroText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>                   
                </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    login: {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 35,
        marginBottom: 20,
        padding: 15
    },
    senha: {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
        padding: 15
    },
    btn: {
        width: '90%',
        height: 55,
        backgroundColor: "red",
        borderRadius: 5,
        marginTop: 20
      },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 52
      },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginTop: 50
    },
    btnCadastroText: {
        color: "blue"
    },
    boxCadastro: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent:  "space-between",
        marginTop: 15
    },
    boxCadastroItem: {
        width: "50%"
    }
})