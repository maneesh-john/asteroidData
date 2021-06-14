import React from "react";
import { View } from "react-native";

import { cardProps } from ".";
import { components } from "../styles";

const Card:React.FC = ({ children }) => {

  return(
    <View style={components.card}>
      {children}
    </View>
  );
}

Card.defaultProps = cardProps;

export default Card;