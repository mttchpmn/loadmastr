import React, { Component } from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Title from "../../components/Title";

class PaxDetails extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-contacts"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Title label={"Passenger Details"} />
      </View>
    );
  }
}

export default PaxDetails;
