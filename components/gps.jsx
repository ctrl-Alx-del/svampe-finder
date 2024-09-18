import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const GPSComponent = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      generateRandomCircles(latitude, longitude);
    };

    getLocationPermission();
  }, []);

  const generateRandomCircles = (latitude, longitude) => {
    const circles = [];
    const numberOfCircles = 5;

    for (let i = 0; i < numberOfCircles; i++) {
      const randomLatOffset = (Math.random() - 0.5) * 0.05;
      const randomLngOffset = (Math.random() - 0.5) * 0.05;
      const randomRadius = 100 + Math.random() * 400;

      circles.push({
        id: i,
        latitude: latitude + randomLatOffset,
        longitude: longitude + randomLngOffset,
        radius: randomRadius,
      });
    }

    setCircles(circles);
  };

  const navigated = useNavigation();

  const onCirclePress = () => {
    navigated.navigate("SvampeInfo");
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} onRegionChangeComplete={(region) => setRegion(region)} showsUserLocation={true}>
        {circles.map((circle, index) => (
          <React.Fragment key={index}>
            <Circle
              center={{ latitude: circle.latitude, longitude: circle.longitude }}
              radius={circle.radius}
              fillColor="rgba(235, 64, 52, 0.3)"
              strokeColor="rgba(235, 64, 52, 0.5)"
              strokeWidth={2}
            />
            <Marker
              coordinate={{ latitude: circle.latitude, longitude: circle.longitude }}
              onPress={() => onCirclePress(circle)}
              opacity={0} // Make the marker invisible but keep it interactive
            />
          </React.Fragment>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GPSComponent;
