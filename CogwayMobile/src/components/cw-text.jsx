import React from "react";
import { Text } from "react-native";
import { textColor } from '../resources/colors';
 
const styles = {
  text: {
    color: textColor
  }
}

export const CwText = (props) =>
  <Text style={[styles.text, props.style]}>
    {props.children}
  </Text>