import { View, Text, StyleSheet, Image } from "react-native";

export default function Exercicios({Exercicio, Intervalo, Imagem, Series, Carga}) {
    return(
        <View style={css.exercicios}>
            <View style={css.textEx}>
                <Text style={css.nome}>{Exercicio}</Text>
                <Text style={css.series}>Series: {Series}</Text>
                <Text style={css.intervalo}>Intervalo: {Intervalo}</Text>
                <Text styl={css.carga}>Carga: {Carga}</Text>
            </View>
            <Image source={Imagem} style={css.imagemEx}/>
        </View>
    )
}

const css = StyleSheet.create( {
    exercicios: {
        display: "flex",
        flexDirection: "row",
        width: "95%",
        height: 200,
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginBottom: 30,
    },
    textEx: {
        width: "49%"
    },
    imagemEx: {
        width: "49%",
        resizeMode: "contain"
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 1,
    },
    series: {
        fontSize: 15,
        padding: 1
    },
    intervalo: {
        fontSize: 15,
        padding: 1
    },
    carga: {
        fontSize: 15,
        padding: 1
    }

    


})
