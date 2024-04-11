import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";
import Exercicios from "./Exercicios";
import Header from "../components/Header";


const exercicios = [
    {
        id: 1,
        Exercicio: "Remada Curvada",
        Carga: "100%",
        Series: "4/12",
        Intervalo: "60s",
        Imagem: require("../assets/remada2.png")
    },
    {
        id: 2,
        Exercicio: "Remada Maquina",
        Carga: "70%",
        Series: "4/12",
        Intervalo: "70", 
        Imagem: require("../assets/remada.png")
       
    },
    {
        id: 3,
        Exercicio: "Supino",
        Carga: "100%",
        Series: "4/6",
        Intervalo: "120", 
        Imagem: require("../assets/supino.png")
       
    }
]


export default function Treino({ navigation, setSuperiores })
{
    return(
        <View style={css.container}>
            <Header/>
            <Text style={css.nome}>Superiores</Text>
            <FlatList
                data={exercicios}
                renderItem={({ item }) => <Exercicios Exercicio={item.Exercicio} Series={item.Series} Imagem={item.Imagem}  Intervalo={item.Intervalo} Carga={item.Carga}/>}
                keyExtracor={(item) => item.id}
            />
            <TouchableOpacity style={css.btn}>
                    <Text style={css.btnText} onPress={()=> setSuperiores(false)}>Voltar</Text>
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
        marginTop: 200,
        color: "black"
    },
    btn: {
        width: '91%',
        height: 40,
        backgroundColor: "red",
        borderRadius: 5,
        top: -10
      },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 35,
      },

})
