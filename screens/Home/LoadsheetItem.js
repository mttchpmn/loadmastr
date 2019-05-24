import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Theme from "../../Theme.js";

const LoadsheetItem = ({ loadsheetData }) => {
  return (
    <View
      style={{
        width: "98%",
        height: 60,
        borderRadius: 2,
        padding: 7,
        margin: 4,
        alignSelf: "center",
        backgroundColor: Theme.primaryLight
      }}
    >
      <TouchableOpacity>
        <Text>{loadsheetData.flightDetails.date}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadsheetItem;
