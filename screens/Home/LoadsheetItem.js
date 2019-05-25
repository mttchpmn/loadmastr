import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Theme from "../../Theme.js";
import Style from "../../Style.js";

const LoadsheetItem = ({ loadsheetData, onPress }) => {
  return (
    <View
      style={{
        width: "98%",
        height: 80,
        backgroundColor: Theme.primaryLight,
        borderRadius: 2,
        margin: 4,
        alignSelf: "center"
      }}
    >
      <TouchableOpacity
        style={{ height: "100%", width: "100%" }}
        onPress={() => onPress()}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: "space-around"
          }}
        >
          <View style={[Style.flexRow]}>
            <View style={{ width: "50%" }}>
              <Text style={{ textAlign: "left", fontSize: 14 }}>
                {loadsheetData.flightDetails.date}
              </Text>
            </View>

            <View style={{ width: "50%" }}>
              <Text style={{ textAlign: "right", fontSize: 14 }}>
                {loadsheetData.flightDetails.aircraftRego} /{" "}
                {loadsheetData.flightDetails.pilot}
              </Text>
            </View>
          </View>

          <View style={[Style.flexRow]}>
            <View style={{ width: "50%" }}>
              <Text style={{ textAlign: "left", fontSize: 14 }}>
                {loadsheetData.flightDetails.route}
              </Text>
            </View>

            <View style={{ width: "50%" }}>
              <Text style={{ textAlign: "right", fontSize: 14 }}>
                {loadsheetData.paxDetails.length} Pax
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoadsheetItem;
