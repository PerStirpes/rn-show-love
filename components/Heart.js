import React from "react"
import { Animated, StyleSheet, View } from "react-native"

export default (Heart = ({ style }) => (
  <Animated.View style={[styles.heart, style]}>
    <View style={[styles.heartShape, styles.leftHeart]} />
    <View style={[styles.heartShape, styles.rightHeart]} />
  </Animated.View>
))

const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
    position: "absolute"
  },
  heartShape: {
    width: 30,
    height: 45,
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#ff9fb8"
  },
  leftHeart: {
    transform: [{ rotate: "-45deg" }],
    left: 5
  },
  rightHeart: {
    transform: [
      {
        rotate: "45deg"
      }
    ],
    right: 5
  }
})
