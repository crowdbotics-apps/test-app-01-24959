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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a4/a0d4/6c2f955abf62cd8e856f42c164014595"
        }}
        style={styles.ImageBackground_3_61}
      />
      <View style={styles.View_3_87}>
        <View style={styles.View_3_88}>
          <View style={styles.View_3_89} />
        </View>
        <View style={styles.View_3_90}>
          <Text style={styles.Text_3_90}>CONTIINUE</Text>
        </View>
      </View>
      <View style={styles.View_3_408}>
        <Text style={styles.Text_3_408}>Onboarding 01</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_3_61: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: 576
  },
  View_3_87: {
    width: wp("50.13333333333333%"),
    height: 34.886600494384766,
    top: 506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_88: {
    width: wp("50.13333333333333%"),
    height: 34.886600494384766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_89: {
    width: wp("50.13333333333333%"),
    height: 34.886600494384766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 4.630964279174805,
    borderTopRightRadius: 4.630964279174805,
    borderBottomLeftRadius: 4.630964279174805,
    borderBottomRightRadius: 4.630964279174805
  },
  View_3_90: {
    width: wp("50.13333333333333%"),
    top: 9.044677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.436548233032227,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_408: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: 233
  },
  Text_3_408: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
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
