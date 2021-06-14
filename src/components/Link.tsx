import React from "react";
import { Text, Linking } from "react-native";

import { linkProps } from ".";
import { components } from "../styles";

const Link:React.FC = ({ children }) => {

  const handlePress = () => {
    if(typeof children === "string"){
      Linking.openURL(children);
    }
  }

  return(
    <Text
      style={components.link}
      onPress={handlePress}
    >
      {children}
    </Text>
  );
}

Link.defaultProps = linkProps;

export default Link;