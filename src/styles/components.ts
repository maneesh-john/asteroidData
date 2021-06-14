import { StyleSheet } from "react-native";

import { colors, dimensions, sizes } from "../utils/constants";

export const components = StyleSheet.create({
  input: {
    width: "100%",
    height: dimensions.hp(5),
    backgroundColor: colors.white,
    fontSize: sizes.small,
    borderBottomColor: colors.main,
    borderBottomWidth: 2,
    marginVertical: dimensions.hp(1)
  },
  errorText: {
    fontSize: sizes.errorText,
    color: colors.error
  },
  typography: {
    color: colors.grey,
    fontSize: sizes.normal
  },
  card: {
    padding: dimensions.wp(4),
    backgroundColor: colors.white,
    borderRadius: sizes.micro,
    elevation: 5,
    shadowColor: colors.black,
    shadowOpacity: .2,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  button: {
    backgroundColor: colors.main,
    borderRadius:sizes.micro,
    marginVertical: dimensions.hp(1),
    padding: dimensions.wp(3)
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.small,
    textAlign: "center",
    fontWeight: "bold"
  },
  link: {
    color: colors.main,
    fontSize: sizes.errorText,
    textDecorationStyle: "solid",
    textDecorationColor: colors.main,
    textDecorationLine: "underline"
  },
  modalView: {
    backgroundColor: `${colors.black}a`
  },
  modalText: {
    fontSize: sizes.small,
    color: colors.main,
    textAlign: "center",
    marginVertical: dimensions.hp(3)
  }
});