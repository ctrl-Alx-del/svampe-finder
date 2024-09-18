import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Navigation() {
  const navigation = useNavigation();

  const GoToBib = () => {
    navigation.navigate("Bibliotek");
  };

  const GoToMaps = () => {
    navigation.navigate("Maps");
  };
  const GoToSvamp = () => {
    navigation.navigate("Svampearter");
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.buttons} onPress={GoToBib} title="Bibliotek">
        <Image style={style.Icons} source={require("../images/favorite.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={[style.button, style.buttons]} onPress={GoToMaps} title="Maps">
        <Image style={style.Icons} source={require("../images/location.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttons} onPress={GoToSvamp} title="Svampearter">
        <Image style={style.Icons} source={require("../images/search.png")}></Image>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  button: {
    marginTop: 50,
  },
  buttons: {
    backgroundColor: "#e20404",
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  Icons: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginTop: 5,
  },
});

{
  // attribution link for at kunne bruge de ikoner fra denne hjemmeside
  /* <Text>https://www.flaticon.com/free-icons/discover Discover icons created by Smashicons - Flaticon</Text> */
  //<a href="https://www.flaticon.com/free-icons/gps" title="gps icons">Gps icons created by Freepik - Flaticon</a>
  //<a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by laterunlabs - Flaticon</a>
}
