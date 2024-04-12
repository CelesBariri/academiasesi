import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../components/Header";

export default function Localizacao()
{
    return(
        <View>
        <Header/> 
        <View style={css.barra}>
            <TextInput style={css.pesquisa} placeholder="Pesquisar"> 
            </TextInput>
        </View>     
        <View>
        <Image style={css.imagem} styles source={require("./../assets/local.jpeg")} />    
        </View> 
     </View>
    )
}
const css = StyleSheet.create({
    img: {
        top: 0,
        left: 0,
        width: "100%",
        height: "22%",
        zIndex: -1,

    },
    imagem: {
        height: 380,
        width: "100%",
        resizeMode: "stretch",
        marginLeft: 5,
        marginTop: 5
    },
    barra: {
        borderRadius: 8,
        width: 270,
        height: 40,
        marginLeft: "15%",
        marginTop: 270,
        borderWidth: 2,
    },
    pesquisa: {
        marginTop: 5,
        marginLeft: 9
    },
    lupa: {
        marginLeft: 1,
    },
    rara: {
        
    }
})