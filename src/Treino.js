import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";

import Exercicios from "./Exercicios";


const exercicios = [
    {
        id: 1,
        Exercicio: "Leg Press",
        Carga: "100%",
        Series: "4/12",
        Intervalo: "60s",
        Imagem: require("../assets/leg.png")
    },
    {
        id: 2,
        Exercicio: "stiff",
        Carga: "70%",
        Series: "4/12",
        Intervalo: "70", 
        Imagem: require("../assets/stiff.png")
       
    },
    {
        id: 3,
        Exercicio: "Passada",
        Carga: "100%",
        Series: "4/6",
        Intervalo: "120", 
        Imagem: require("../assets/Passada.png")
       
    }
]

export default function Treino({ navigation })
{
    return(
        <View style={css.container}>
            <Image style={css.img} source={require("./../assets/logo.png")}/>
            <Text style={css.nome}>Inferiores</Text>
            <FlatList
                data={exercicios}
                renderItem={({ item }) => <Exercicios Exercicio={item.Exercicio} Series={item.Series} Imagem={item.Imagem}  Intervalo={item.Intervalo} Carga={item.Carga}/>}
                keyExtracor={(item) => item.id}
            />
            <TouchableOpacity style={css.btn}>
                    <Text style={css.btnText} onPress={() => navigation.navigate( "Home" ) }>Voltar</Text>
                </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        top: -20,
        width: "100%",
        height: "32%",
        zIndex: -1,
        resizeMode: "contain"
    },
    nome: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 20,
        marginTop: -20
    },
    btn: {
        position: "absolute",
        width: '91%',
        height: 40,
        backgroundColor: "red",
        borderRadius: 5,
        top: 750
      },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 35,
      },
})
