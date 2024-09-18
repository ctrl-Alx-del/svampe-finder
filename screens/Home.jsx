import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Navigation from "../components/Navigation";
import MovingUpDown from "../components/MovingImg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Svampefinder</Text>
      <MovingUpDown></MovingUpDown>
      <Navigation></Navigation>
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
    textAlign: "center",
  },
});
