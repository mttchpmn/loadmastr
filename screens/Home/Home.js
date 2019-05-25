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
import Loadsheet from "../Loadsheet/Loadsheet";

import Theme from "../../Theme";
import Style from "../../Style";
import LoadsheetItem from "./LoadsheetItem";
import { LoadDataContext } from "../../App";
import Title from "../../components/Title";

class Home extends Component {
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
          <Title label={"Flight History"} />
          <FlatList
            // THIS NEEDS TO BE LOADED FROM STORAGE
            data={require("../../testLoadModelList")}
            //  THIS SHOULD BE ITS OWN COMPONENT
            keyExtractor={(item, index) => `${index}-${item.date}`}
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
                  this.props.navigation.navigate("Loadsheet");
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
                  Aircraft Config
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    FlightConfig: {
      screen: FlightConfig
    },
    Loadsheet: {
      screen: Loadsheet
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitle: <Header />,
      headerStyle: {
        backgroundColor: Theme.primary
      },
      headerTintColor: Theme.white
    }
  }
);

export default createAppContainer(AppNavigator);
