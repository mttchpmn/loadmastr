import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Font } from "expo";

import Header from "../../components/Header";
import FlightConfig from "../FlightConfig/FlightConfig";
import FlightDetails from "../FlightDetails/FlightDetails";
import PaxDetails from "../PaxDetails/PaxDetails";
import FlightTotals from "../FlightTotals/FlightTotals";

import Theme from "../../Theme";
import Style from "../../Style";
import LoadsheetItem from "./LoadsheetItem";

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
      <View style={Style.flexContainer}>
        <View
          style={{
            width: "100%",
            height: "90%",
            backgroundColor: Theme.background
          }}
        >
          <FlatList
            // THIS NEEDS TO BE LOADED FROM STORAGE
            data={require("../../testLoadModelList")}
            //  THIS SHOULD BE ITS OWN COMPONENT
            renderItem={({ item }) => (
              <LoadsheetItem key={item.date} loadsheetData={item} />
            )}
          />
        </View>

        <View style={{ height: "10%", backgroundColor: Theme.background }}>
          <View style={Style.flexRow}>
            <View
              style={{
                width: "65%",
                height: "80%",
                borderRadius: 5,
                backgroundColor: Theme.primary
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("PaxDetails");
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    color: Theme.white,
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "bold"
                  }}
                >
                  New Load Sheet
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "30%",
                height: "80%",
                borderColor: Theme.divider,
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: Theme.background
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("FlightConfig");
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    color: Theme.primary,
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "bold"
                  }}
                >
                  Flight Config
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
