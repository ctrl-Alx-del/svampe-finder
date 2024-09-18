import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import Svampe from "../components/Svampe";
import { ItemContext } from "../components/Context.jsx";
import { useContext } from "react";

export default function BibliotekScreen() {
  const { items } = useContext(ItemContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bibliotek</Text>
      <FlatList style={styles.border} data={items} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c91a3",
  },
  h1: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
  },
  border: {
    borderRadius: 10,
    borderColor: "black",
    height: 125,
  },
  itemContainer: {
    flexDirection: "column",
    margin: 10,
    alignSelf: "center",
  },
  itemImage: {
    width: 200,
    height: 100,
    marginRight: 10,
    resizeMode: "contain",
  },
  itemText: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "lightgrey",
    width: 150,
    alignSelf: "center",
    marginRight: 10,
  },
});
