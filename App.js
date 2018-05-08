import React from "react"
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from "react-native"
import randomInt from "./components/randomInt"

const { width, height } = Dimensions.get("window")
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hearts: []
    }

    this.handleAddHeart = this.handleAddHeart.bind(this)
  }
  handleAddHeart() {
    const animation = new Animated.Value(0)
    this.setState(
      state => ({
        hearts: [
          ...state.hearts,
          { animation, start: randomInt(100, width - 100) }
        ]
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
            })}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const Heart = ({ style }) => (
  <Animated.View style={[styles.heart, style]}>
    <View style={[styles.heartShape, styles.leftHeart]} />
    <View style={[styles.heartShape, styles.rightHeart]} />
  </Animated.View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
    backgroundColor: "#6427d1"
  },
  leftHeart: {
    transform: [{ rotate: "-45deg" }],
    left: 5
  },
  rightHeart: {
    transform: [
      {
        rotate: "45deg",
        right: 5
      }
    ]
  }
})
