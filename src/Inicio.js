import { Image, StyleSheet, Text, View,ScrollView } from "react-native";
//import Header from "../components/Header2";


export default function Inicio()
{ 
    return(
        <View style={css.container}>          
            <ScrollView>  
                <Image style={css.iasa} source={require("./../assets/Sesi.png")}/>
                <View style={css.perfilBox}>
                    <View style={css.item}>               
                        <Image style={css.itemImg} source={require("./../assets/reanto.png")}/>
                        <View style={css.caxa}>
                            <Text style={css.itemText}>Bem vindo,<Text style={css.itemText1}> Aquiles!</Text></Text>
                        </View>
                    </View>
                    <View style={css.item}>
                        <Image style={css.itemImg} source={require("./../assets/70.png")}/>
                        <Text style={css.itemText2}>Parabéns</Text>
                    </View>
                </View>
                <Text style={css.texto2}>Seu desempenho diario</Text>
                <View style={css.caxa2}>
                    <Image style={css.img1} source={require("./../assets/efodane.png")}/> 
                 </View>          
                <Text style={css.texto3}>Progressão de Carga</Text>
                <Image style={css.img2} source={require("./../assets/grafico.png")}/>
                <Text style={css.texto4}>ㅤSegㅤㅤ Terㅤㅤ Quaㅤㅤ Quiㅤㅤ Sex</Text>
                <View style={css.fim}></View>
            </ScrollView>
        </View>       
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"        
    },
    perfilBox: {
        width: "95%",
        height: 230,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    item: {
        width: "70%",
        height: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",        
    },
    itemImg: {
        width: "100%",
        height: 140,
        resizeMode: "contain",              
    },
    itemText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    texto2: {
        paddingLeft: 200,
        paddingTop: 539,
        fontSize: 15,
        fontWeight: "bold",
        position: "absolute"
    },
    itemImgine: {
        height: 250,
        resizeMode:"stretch",
        marginTop: 540,
        width: 600,
    },
    img1: {
        marginTop: 119,
        height: 260,
        resizeMode: "stretch",
    },
    caxa: {
      width: 150,
      marginLeft: 30
    },
    itemText1: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red"
    },
    itemText2: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red",
        marginLeft: 6
    },
    caxa2: {
        marginLeft: 55
    },
    img2: {
        marginTop: 59,
        height: 150,
        resizeMode: "contain",
        marginRight: 20
        
    },
    texto3: {
        paddingLeft: 215,
        paddingTop: 23,
        fontSize: 17,
        fontWeight: "bold",
        
    },
    texto4: {
        paddingLeft: 40,
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        
    },
    fim:{
        height:30
    },
    iasa: {
        height: 220,
        width: 432,
        resizeMode: "stretch",
        marginLeft: -20
    }
})