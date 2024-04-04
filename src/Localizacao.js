import { StyleSheet, View, Image, TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Localizacao()
{
    return(
        <View>
        <Image style={css.img} styles source={require("./../assets/Sesi.png")} /> 
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
        height: 400,
        width: 400,
        resizeMode: "stretch",
        marginLeft: 0,
        marginTop: 40
    },
    barra: {
        borderRadius: 8,
        width: 270,
        height: 40,
        marginLeft: "15%",
        marginTop: 25,
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