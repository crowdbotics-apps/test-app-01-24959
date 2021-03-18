import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb3/1236/9f07259107981d5307ffa1ff13a5b2b8"
        }}
        style={styles.ImageBackground_3_174}
      />
      <View style={styles.View_3_109} />
      <View style={styles.View_7_0}>
        <View style={styles.View_3_123} />
      </View>
      <View style={styles.View_3_188} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f9d/04df/9cd5f37d12d65fe9cedde849311a418a"
        }}
        style={styles.ImageBackground_3_585}
      />
      <View style={styles.View_3_191} />
      <View style={styles.View_3_184} />
      <View style={styles.View_3_125}>
        <Text style={styles.Text_3_125}>Section 1 for women</Text>
      </View>
      <View style={styles.View_3_189}>
        <Text style={styles.Text_3_189}>Section 3 for women</Text>
      </View>
      <View style={styles.View_3_192}>
        <Text style={styles.Text_3_192}>Section 4 for women</Text>
      </View>
      <View style={styles.View_3_185}>
        <Text style={styles.Text_3_185}>Section 2 for women</Text>
      </View>
      <View style={styles.View_3_126}>
        <Text style={styles.Text_3_126}>
          Neque porro quisquam est qui dolorem{" "}
        </Text>
      </View>
      <View style={styles.View_3_190}>
        <Text style={styles.Text_3_190}>
          Neque porro quisquam est qui dolorem{" "}
        </Text>
      </View>
      <View style={styles.View_3_193}>
        <Text style={styles.Text_3_193}>
          Neque porro quisquam est qui dolorem{" "}
        </Text>
      </View>
      <View style={styles.View_3_186}>
        <Text style={styles.Text_3_186}>
          Neque porro quisquam est qui dolorem{" "}
        </Text>
      </View>
      <View style={styles.View_29_18}>
        <View style={styles.View_3_110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f35/b1e4/28c7fffe81a1f2cdd1814b6f64a45b33"
            }}
            style={styles.ImageBackground_3_111}
          />
        </View>
        <View style={styles.View_29_67}>
          <View style={styles.View_3_127}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5181/3c67/6be162a3ec29c9ed66278f1ae6e9733c"
              }}
              style={styles.ImageBackground_3_128}
            />
          </View>
          <View style={styles.View_3_136}>
            <Text style={styles.Text_3_136}>242</Text>
          </View>
        </View>
        <View style={styles.View_3_137}>
          <Text style={styles.Text_3_137}>Kevin</Text>
        </View>
      </View>
      <View style={styles.View_3_138}>
        <Text style={styles.Text_3_138}>What you need help with?</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc8/a7b0/f174f83b605651f8512b78b559b4bca2"
        }}
        style={styles.ImageBackground_3_194}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_3_174: {
    width: wp("101.06666666666666%"),
    minWidth: wp("101.06666666666666%"),
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: -4,
    resizeMode: "cover"
  },
  View_3_109: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 259,
    minHeight: 259,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_7_0: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: 151,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: 270,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_123: {
    flexGrow: 1,
    width: wp("38.666666666666664%"),
    height: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 120, 139, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_3_188: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: 151,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: 434,
    backgroundColor: "rgba(143, 215, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_3_585: {
    width: wp("7.466666666666668%"),
    height: 28,
    top: 550,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%")
  },
  View_3_191: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: 151,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: 434,
    backgroundColor: "rgba(169, 138, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_3_184: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: 151,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: 270,
    backgroundColor: "rgba(255, 239, 157, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_3_125: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: 288
  },
  Text_3_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_189: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: 447
  },
  Text_3_189: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_192: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: 447
  },
  Text_3_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_185: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: 288
  },
  Text_3_185: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_126: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: 347
  },
  Text_3_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_190: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: 506
  },
  Text_3_190: {
    color: "rgba(46, 46, 46, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_193: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: 506
  },
  Text_3_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_186: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: 347
  },
  Text_3_186: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_18: {
    width: wp("92.20553385416666%"),
    minWidth: wp("92.20553385416666%"),
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.327799479166667%"),
    top: 14,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_110: {
    flexGrow: 1,
    width: wp("6.602730814615885%"),
    height: 24.76024055480957,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_3_111: {
    width: wp("6.602730814615885%"),
    height: 24.76024055480957,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_67: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87220052083333%"),
    top: 0
  },
  View_3_127: {
    width: wp("6.133333333333333%"),
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_128: {
    width: wp("5.77254892985026%"),
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36080729166666003%")
  },
  View_3_136: {
    width: wp("9.333333333333334%"),
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  Text_3_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_137: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.472200520833333%"),
    top: 3
  },
  Text_3_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_138: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: 224
  },
  Text_3_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: 610,
    resizeMode: "cover"
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
