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
    height: 180,
    position: "absolute",
    top: 0,
    left: 0
  },
  logo: {
    width: "92%",
    height: "100%",
    position: "relative",
    resizeMode: "cover"
  }

})