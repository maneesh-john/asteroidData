import { StyleSheet } from "react-native";

import { colors, dimensions, sizes } from "../utils/constants";

export const details = StyleSheet.create({
  header: {
    color: colors.main,
    textAlign: "center",
    marginBottom: dimensions.hp(2)
  },
  regularText: {
    fontSize: sizes.small,
    marginVertical: dimensions.hp(1)
  }
});