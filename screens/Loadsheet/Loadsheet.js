import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "@expo/vector-icons";

import PaxDetails from "./PaxDetails";
import FlightDetails from "./FlightDetails";
import FlightTotals from "./FlightTotals";

import Theme from "../../Theme";

const TabNavigator = createBottomTabNavigator(
  {
    "Flight Details": FlightDetails,
    "Passenger Details": PaxDetails,
    "Flight Totals": FlightTotals
  },
  {
    initialRouteName: "Passenger Details",
    tabBarOptions: {
      activeTintColor: Theme.white,
      activeBackgroundColor: Theme.primaryDark,
      inactiveTintColor: Theme.white,
      inactiveBackgroundColor: Theme.primary,
      showIcon: true,
      showLabel: false
    }
  }
);

export default createAppContainer(TabNavigator);
