import React from "react"
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from "react-native"
import { getRandomInt, randomHex } from "./helpers/utilities"
import Heart from "./components/Heart"

const { width, height } = Dimensions.get("window")
export default class App extends React.Component {
  state = {
    hearts: [],
    backgroundColor: randomHex()
  }

  handleAddHeart = () => {
    const animation = new Animated.Value(0)

    this.setState(
      state => ({
        hearts: [
          ...state.hearts,
          { animation, start: getRandomInt(100, width - 100) }
        ],
        backgroundColor: randomHex()
      }),

      () => {
        Animated.timing(animation, {
          toValue: height,
          duration: 3000
        }).start()
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handleAddHeart}>
          <View style={StyleSheet.absoluteFill}>
            {this.state.hearts.map(({ animation, start }, index) => {
              const dividedHeight = height / 6

              const positionInterpolate = animation.interpolate({
                inputRange: [0, height],
                outputRange: [height - 50, 0]
              })

              const opacityInterpolate = animation.interpolate({
                inputRange: [0, height - 200],
                outputRange: [1, 0]
              })

              const scaleInterpolate = animation.interpolate({
                inputRange: [0, 15, 30],
                outputRange: [0, 1.2, 1],
                extrapolate: "clamp"
              })

              const wobbleInterpolate = animation.interpolate({
                inputRange: [
                  0,
                  dividedHeight * 1,
                  dividedHeight * 2,
                  dividedHeight * 3,
                  dividedHeight * 4,
                  dividedHeight * 5,
                  dividedHeight * 6
                ],
                outputRange: [0, 15, -15, 15, -15, 15, -15],
                extrapolate: "clamp"
              })

              const heartStyle = {
                left: start,
                transform: [
                  { translateY: positionInterpolate },
                  { translateX: wobbleInterpolate },
                  { scale: scaleInterpolate }
                ],
                opacity: opacityInterpolate
              }

              return <Heart key={index} style={[heartStyle]} />
            })}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
