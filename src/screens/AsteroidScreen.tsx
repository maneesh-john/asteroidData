import React, { Dispatch } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useDispatch, useStore } from "../contexts/AppContext";

import { SET_ASTEROID_DATA } from "../actions/types";
import { RootNavigation } from "../navigation/types";
import { State, Action } from "../contexts/appReducer";
import { common, details } from "../styles";
import { Card, Typography, Button, Link } from "../components";

type Props = {
  navigation: StackNavigationProp<RootNavigation, "Details">
}

const SearchScreen:React.FC<Props> = ({ navigation }) => {

  const dispatch:Dispatch<Action> | undefined = useDispatch();
  const state:State | undefined = useStore();

  const dispatchAction = () => {
    navigation.goBack();
    dispatch?.({
      type: SET_ASTEROID_DATA,
      payload: {}
    });
  }

  const isHazardous = () => {
    if(state?.asteroidData?.is_potentially_hazardous_asteroid){
      return "This is a hazardous asteroid";
    }
    return "This asteroid is not hazardous";
  }

  return(
    <View style={common.container}>
      <Card>
        <Typography style={details.header}>
          {state?.asteroidData?.name_limited}
        </Typography>
        <Typography style={details.regularText}>
          Reference ID: {state?.asteroidData?.neo_reference_id}
        </Typography>
        <Typography style={details.regularText}>
          Diameter: {state?.asteroidData?.estimated_diameter?.kilometers?.estimated_diameter_min} KM
        </Typography>
        <Typography style={details.regularText}>
          {isHazardous()}
        </Typography>
        <Link>
          {state?.asteroidData?.nasa_jpl_url}
        </Link>
      </Card>
      <Button onPress={dispatchAction}>
        Back
      </Button>
    </View>
  );
}

export default SearchScreen;