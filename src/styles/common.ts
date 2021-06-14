import { StyleSheet } from "react-native";

import { colors, dimensions } from "../utils/constants";

export const common = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.main
  },
  container: {
    flex: 1,
    padding: dimensions.wp(5),
    backgroundColor: colors.white,
    paddingTop: dimensions.hp(15)
  }
});