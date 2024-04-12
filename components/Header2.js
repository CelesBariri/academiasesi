import { StyleSheet, View, Image } from "react-native"

export default function Header() {
  return (
    <View style={css.header}>
      <Image style={css.logo} source={require( "../assets/logosesi.png" ) } />
    </View>
  )
}
const css = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 0,
    height: 160,
  },
  logo: {
    width: "95%",
    height: "100%",
    marginLeft:0
  }
})