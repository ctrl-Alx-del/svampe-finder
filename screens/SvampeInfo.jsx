import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Svampe from "../components/Svampe";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { ItemContext } from "../components/Context.jsx";

const SvampeInfo = () => {
  const navigation = useNavigation();

  const GoToBib = () => {
    navigation.navigate("Bibliotek");
  };

  // Initial state with the first image source
  const [imageSource, setImageSource] = useState(require("../images/star.png"));

  const { toggleItem } = useContext(ItemContext);

  // Function to handle the click event and change the image
  const changeImage = () => {
    const newImageSource = imageSource === require("../images/star.png") ? require("../images/starfull.png") : require("../images/star.png");

    setImageSource(newImageSource);

    const newImagePath = require("../images/Karl-johan.jpg");

    toggleItem({
      image: newImagePath,
      text: "Karl-Johan",
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>I Nærheden</Text>
        <View style={styles.SvampeInfo}>
          <Text style={styles.undertitle}>Karl Johan</Text>
          <Image style={styles.img} source={require("../images/Karl-johan.jpg")}></Image>
          <Text style={styles.fund}>Accepterede fund: 4842</Text>
          <Text style={styles.h2}>Beskrivelse</Text>
          <Text style={styles.text}>
            En stor fedtet, læderbrun til orangebrun hat med en sej hathud. De meget fine rørmundinger er først hvidlige, siden gullige til lyst oliven. Den kraftige, ofte tøndeformede stok har et
            hvidligt net ned ad stokken.
          </Text>
          <Text style={styles.h2}>Information</Text>
          <Text style={styles.text}>Vokser i løv- og nåleskov, og er almindelig i Danmark</Text>
          <View style={styles.anvendelse}>
            <View style={styles.underAnvendelse}>
              <Text style={styles.text}>Giftig</Text>
              <Image style={styles.icons} source={require("../images/remove.png")}></Image>
            </View>
            <View style={styles.underAnvendelse}>
              <Text style={styles.text}>Spiselig</Text>
              <Image style={styles.icons} source={require("../images/accept.png")}></Image>
            </View>
          </View>
        </View>

        <View style={styles.SvampeInfo}>
          <View style={styles.starContainer}>
            <Text style={styles.title}>Tillykke</Text>
            <TouchableOpacity onPress={changeImage}>
              <Image style={styles.star} source={imageSource}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.overskrift}>Du fandt en Karl Johan</Text>
          <Image style={styles.img} source={require("../images/Karl-johan.jpg")}></Image>
          <TouchableOpacity onPress={GoToBib} title="Svampearter">
            <View style={styles.KnapContainer}>
              <Text style={styles.bibliotekKnap}>Kig i dit bibliotek</Text>
              <Image style={styles.rightArrow} source={require("../images/right-arrow.png")}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0c91a3",
  },
  undertitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  fund: {
    alignSelf: "center",
    color: "white",
    fontSize: 15,
  },
  h2: {
    fontSize: 20,
    marginBottom: 3,
    color: "white",
    alignSelf: "flex-start",
  },
  overskrift: {
    fontSize: 20,
    marginBottom: 3,
    color: "white",
  },
  bibliotekKnap: {
    fontSize: 20,
    marginBottom: 3,
    color: "white",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 15,
    color: "white",
    alignSelf: "flex-start",
  },
  SvampeInfo: {
    width: 300,
    borderWidth: 5,
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#075862",
  },
  anvendelse: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
  underAnvendelse: {
    padding: 8,
    width: 100,
    borderRadius: 20,
    backgroundColor: "grey",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 200,
    height: 200,
  },
  icons: {
    width: 23,
    height: 23,
  },
  star: {
    width: 50,
    height: 50,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 235,
  },
  rightArrow: {
    width: 25,
    height: 25,
  },
  KnapContainer: {
    marginTop: 5,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
});

export default SvampeInfo;

{
  /* <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Pixel perfect - Flaticon</a> */
  /* <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by kliwir art - Flaticon</a> */
  //<a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
  //<a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
  //<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>
}
