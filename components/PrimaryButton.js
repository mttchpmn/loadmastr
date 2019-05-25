import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Theme from "../Theme";

const PrimaryButton = ({ label, onPress }) => {
  return (
    <View
      style={{
        width: "65%",
        height: "80%",
        maxHeight: 50,
        minWidth: 150,
        borderRadius: 5,
        backgroundColor: Theme.primary,
        marginVertical: 5
      }}
    >
      <TouchableOpacity
        onPress={() => onPress()}
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
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
