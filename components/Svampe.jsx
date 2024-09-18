import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const data = [
  { id: "1", name: "Kantarel", image: require("../images/Chanterelle.png") },
  { id: "2", name: "Vellugtende sneglehat", image: require("../images/Vellugtende-Sneglehat.jpg") },
  { id: "3", name: "Plæne-hjulhat", image: require("../images/Plæne-hjulhat.jpg") },
  { id: "4", name: "Fladtrådt frynse", image: require("../images/Fladtrådt-frynse.jpg") },
  { id: "5", name: "Gulgrøn Koralsvamp", image: require("../images/Gulgrøn-Koralsvamp.jpg") },
  { id: "6", name: "Kødet stjernebold", image: require("../images/Kødet-stjernebold.jpg") },
  { id: "7", name: "Birke-ridderhat", image: require("../images/Birke-ridderhat.jpg") },
  { id: "8", name: "Fløjls-skærmhat", image: require("../images/Fløjls-skærmhat.jpg") },

  // Add more items as needed
];

const Svampe = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.img} source={item.image}></Image>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // Set the number of columns
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  item: {
    overflow: "hidden",
    flex: 1,
    margin: 5,
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    backgroundColor: "lightgrey",
    width: 160,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 24,
  },
  img: {
    width: 200,
    height: 130,
  },
});

export default Svampe;
