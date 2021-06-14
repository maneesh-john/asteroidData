import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootNavigation } from "./types";
import SearchScreen  from "../screens/SearchScreen";
import AsteroidScreen from "../screens/AsteroidScreen";

const { Navigator, Screen } = createStackNavigator<RootNavigation>();

const Navigation:React.FC = () => {

  return(
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen
          name="Search"
          component={SearchScreen}
        />
        <Screen
          name="Details"
          component={AsteroidScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;