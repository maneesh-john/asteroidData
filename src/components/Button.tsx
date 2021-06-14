import React from "react";
import { TouchableOpacity, StyleProp, TextStyle, ViewStyle, ActivityIndicator } from "react-native";

import { components } from "../styles";
import { Typography, buttonProps } from ".";
import { colors } from "../utils/constants";

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
}

const Button:React.FC<Props> = ({
  onPress,
  style,
  textStyle,
  disabled,
  loading,
  children
}) => {

  return(
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[components.button, style]}
    >
      {(loading)?(
        <ActivityIndicator color={colors.white} />
      ):(
        <Typography style={[components.buttonText, textStyle]}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

Button.defaultProps = buttonProps;

export default Button;