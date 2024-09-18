import React, { useEffect, useRef } from "react";
import { Image, Animated, StyleSheet } from "react-native";

const MovingUpDown = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10, // Move up by 10 units
          duration: 1000, // Duration for the upward movement
          useNativeDriver: true, // Optimize performance by using native driver
        }),
        Animated.timing(translateY, {
          toValue: 10, // Move down by 10 units
          duration: 1000, // Duration for the downward movement
          useNativeDriver: true,
        }),
      ])
    );

    animation.start(); // Start the animation

    return () => animation.stop(); // Clean up the animation when the component unmounts
  }, [translateY]);

  return <Animated.View style={[{ transform: [{ translateY }] }]}>{<Image style={styles.img} source={require("../images/svampeIcon.png")}></Image>}</Animated.View>;
};

const styles = StyleSheet.create({
  img: {
    width: 210,
    height: 250,
    alignSelf: "center",
    marginTop: 125,
  },
});

export default MovingUpDown;
