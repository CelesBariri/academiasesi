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

import React from 'react'
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header';

export default function Cadastro({ setLogado, setCadastro, setCpf }) {
    
    function Cadastrar() {
        setCadastro( false );
        setLogado( false );
    }

    function Voltar() {
        setCadastro( false );
        setLogado( false );
    }
  return (
    <View style={css.container}>
        <Header/>
        <Text style={css.titulo}>CADASTRAR-SE</Text>
        <TextInput 
        style={css.email}
        placeholder="Insira seu e-mail:"      
        />
        <TextInput
        style={css.senha}
        placeholder="Insira sua Senha:"    
        />
         <TextInput
        style={css.senha}
        placeholder="Insira seu CPF:"    
        />
        <TouchableOpacity style={css.btn} onPress={Cadastrar}>
            <Text style={css.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Voltar}>
            <Text>Voltar</Text>
        </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
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
      email: {
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
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginBottom: 40,
        marginTop: 150
    },
})

