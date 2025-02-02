import { Animated, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

const AnimatedBackground = ({ animatedValue }) => {
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0], // Reducida la distancia
    extrapolate: "clamp", // Previene rebotes
  })

  return (
    <AnimatedGradient
      colors={["#14CC5E", "#14CC5E"]}
      style={[
        styles.background,
        {
          transform: [{ translateY }],
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "120%", // Reducido para mejor control
    borderRadius: 70,
    zIndex: 2,
    left: 0,
    top: 0, // Aseguramos que comience desde arriba
  },
})

export default AnimatedBackground
