import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import PaxDetails from "./PaxDetails";
import FlightDetails from "./FlightDetails";
import FlightTotals from "./FlightDetails";

const TabNavigator = createBottomTabNavigator({
  "Flight Details": FlightDetails,
  "Passenger Details": PaxDetails,
  "Flight Totals": FlightTotals
});

export default createAppContainer(TabNavigator);
