import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import { typographyProps } from ".";
import { components } from "../styles";

type Props = {
  style?: StyleProp<TextStyle>;
}

const Typography:React.FC<Props> = ({ children, style }) => {

  return(
    <Text style={[components.typography, style]}>
      {children}
    </Text>
  );
}

Typography.defaultProps = typographyProps;

export default Typography;