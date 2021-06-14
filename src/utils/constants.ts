import { Platform, Dimensions, StyleSheet } from "react-native";

import { DimensionType, Sizes, Colors, HeaderOptions } from "./types";

const isOs = (os: string) => (Platform.OS === os);

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const dimensions:DimensionType = {
  sw: screenDimensions.width,
  sh: screenDimensions.height,
  ww: windowDimensions.width,
  wh: windowDimensions.height,
  hp: (multiplier) => (screenDimensions.height/100) * multiplier,
  wp: (multiplier) => (screenDimensions.width/100) * multiplier
}

const sizes:Sizes = {
  micro: 5,
  mini: 10,
  small: 15,
  normal: 20,
  large: 25,
  errorText: 12
}

const colors: Colors = {
  main: "#8e44ad",
  accent: "#34495e",
  grey: "#aaa",
  black: "#333",
  white: "#fff",
  error: "#e74c3c"
}

const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.main
  }
});

const headerOptions: HeaderOptions = {
  headerStyle: headerStyle.header,
  headerTintColor: colors.white
}

export {
  isOs,
  dimensions,
  sizes,
  colors,
  headerOptions
}