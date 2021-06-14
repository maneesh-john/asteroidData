import { StyleProp, ViewStyle } from "react-native";

export type DimensionType = {
  sw: number;
  sh: number;
  ww: number;
  wh: number;
  hp: (p: number) => number;
  wp: (p: number) => number;
}

export type Sizes = {
  micro: number;
  mini: number;
  small: number;
  normal: number;
  large: number;
  errorText: number;
}

export type Colors = {
  main: string;
  accent: string;
  grey: string;
  black: string;
  white: string;
  error: string;
}

export type HeaderOptions = {
  headerStyle: StyleProp<ViewStyle>;
  headerTintColor: string;
}