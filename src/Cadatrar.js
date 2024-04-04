import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Cadatrar() {
    return (
        <View>
            <Image style={css.img} styles source={require("./../assets/Sesi.png")} />
            <View style={css.quadrado}>
                <Text style={css.text}>Treino 1</Text>
                <Text style={css.font}>Inferiores</Text>
                <Text style={css.fent}>Quadrceps</Text>
                <View style={css.flex}>
                    <TouchableOpacity style={css.butao}>
                        <Text style={css.btntext}>Historico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.butao2}>
                        <Text style={css.btntext2}>Evolução</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={css.butao3}>
                        <Text style={css.btntext3}>Ver Treino</Text>
                    </TouchableOpacity>
            </View>
            <View style={css.quadrado}>
                <Text style={css.text}>Treino 2</Text>
                <Text style={css.font}>Superiores</Text>
                <Text style={css.fent}>Costas</Text>
                <View style={css.flex}>
                    <TouchableOpacity style={css.butao}>
                        <Text style={css.btntext}>Historico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.butao2}>
                        <Text style={css.btntext2}>Evolução</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={css.butao3}>
                        <Text style={css.btntext3}>Ver Treino</Text>
                    </TouchableOpacity>
            </View>
            
        </View>
    )
}
const css = StyleSheet.create({
    img: {
        top: 0,
        left: 0,
        width: "100%",
        height: "28%",
        zIndex: -1,

    },
    quadrado: {
        width: 350,
        height: 200,
        bordercolor: "black",
        borderWidth: 2,
        marginTop: 60,
        marginLeft: 21,
        borderRadius: 10,


    },
    text: {
        marginLeft: 15,
        marginTop: 6,
        fontSize: 19,
        fontWeight: "bold"

    },
    font: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 3,
    },
    fent: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 5,
    },
    butao: {
        width: 140,
        height: 33,
        marginTop: 20,
        marginLeft: 19,
        borderRadius: 4,
        borderTopColor: "blue",
        borderRightColor: "blue",
        borderLeftColor: "blue",
        borderBottomColor: "blue",
        borderWidth: 2,
    },
    btntext: {
        fontSize: 15,
        textAlign: "center",
        lineHeight: 28,
        color: "blue",
        fontWeight: "bold"

    },
    butao2: {
        width: 140,
        height: 33,
        marginTop: 20,
        marginLeft: 19,
        borderRadius: 4,
        borderTopColor: "red",
        borderRightColor: "red",
        borderLeftColor: "red",
        borderBottomColor: "red",
        borderWidth: 2,


    },
    btntext2: {
        fontSize: 15,
        textAlign: "center",
        lineHeight: 28,
        color: "red",
        fontWeight: "bold"

    },
    flex: {
        display: "flex",
        flexDirection: "row"
    },
    butao3: {
        width: 300,
        height: 33,
        marginTop: 12,
        marginLeft: 19,
        borderRadius: 4,
        backgroundColor: "red",


    },
    btntext3: {
        fontSize: 15,
        textAlign: "center",
        lineHeight: 30,
        color: "white",
        fontWeight: "bold"

    },
})