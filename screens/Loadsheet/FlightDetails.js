import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Title from "../../components/Title";

class FlightDetails extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-airplane"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Title label={"Flight Details"} />
      </View>
    );
  }
}

export default FlightDetails;
