import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Title from "../../components/Title";

class FlightTotals extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-calculator"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Title label={"Flight Totals"} />
      </View>
    );
  }
}

export default FlightTotals;
