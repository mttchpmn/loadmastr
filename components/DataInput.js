import React from "react";
import { TextInput, Text, View } from "react-native";

import Style from "../Style";
import Theme from "../Theme";

const DataInput = ({ label, value, onChange, type = "default" }) => {
  let borderCol = Theme.divider;

  return (
    <View
      style={{
        width: "100%",
        height: 60,
        paddingHorizontal: 10,
        paddingVertical: 5
      }}
    >
      <View style={Style.flexRow}>
        <Text style={{ fontSize: 16 }}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={text => onChange(text)}
          keyboardType={type}
          style={{
            minWidth: 160,
            borderColor: Theme.divider,
            paddingHorizontal: 10,
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: Theme.background
          }}
        />
      </View>
    </View>
  );
};

export default DataInput;
