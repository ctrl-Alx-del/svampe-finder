import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import GPSComponent from "../components/gps.jsx";

export default function MapsScreen() {
  return (
    <View style={styles.container}>
      <Text>Det her er Maps!</Text>
      <GPSComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009ec2",
  },
});
