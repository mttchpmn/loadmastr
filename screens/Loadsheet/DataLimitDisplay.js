import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Style from "../../Style";
import Theme from "../../Theme";

const DataLimitDisplay = ({ label, data, limit }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        marginBottom: 7
      }}
    >
      <View
        style={[
          Style.flexRow,
          {
            paddingLeft: 15,
            paddingRight: 25
          }
        ]}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {label}
          </Text>
        </View>

        <View
          style={{
            borderColor: Theme.divider,
            borderWidth: 1,
            borderRadius: 4,
            minHeight: 20,
            paddingHorizontal: 5,
            paddingVertical: 3,
            minWidth: 120
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "right"
            }}
          >
            {data} KG
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingLeft: 15
        }}
      >
        <Text>{limit ? `MAX: ${limit} KG` : null}</Text>
      </View>
    </View>
  );
};

export default DataLimitDisplay;
