import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Font } from "expo";

import Header from "../../components/Header";
import FlightConfig from "../FlightConfig/FlightConfig";
import FlightDetails from "../FlightDetails/FlightDetails";
import PaxDetails from "../PaxDetails/PaxDetails";
import FlightTotals from "../FlightTotals/FlightTotals";

import Theme from "../../theme";

class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: {
      backgroundColor: Theme.primary
    },
    headerTintColor: Theme.white
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      audiowide: require("../../assets/Audiowide.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
        <Text>Home is working okay!</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  FlightConfig: {
    screen: FlightConfig
  },
  FlightDetails: {
    screen: FlightDetails
  },
  PaxDetails: {
    screen: PaxDetails
  },
  FlightTotals: {
    screen: FlightTotals
  }
});

export default createAppContainer(AppNavigator);
