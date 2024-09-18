import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import Svampe from "../components/Svampe";

export default function SvampearterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Svampearter</Text>
      <Text style={styles.description}>Find den svamp du leder efter</Text>
      <Svampe />
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
  description: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
});
