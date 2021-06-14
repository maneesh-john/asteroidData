import React, { useState, Dispatch } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import useForm from "../hooks/useForm";
import { searchAsteroid, getRandomAsteroid } from "../actions/asteroidActions";
import { useDispatch } from "../contexts/AppContext";
import { Action } from "../contexts/appReducer";
import { RootNavigation, UseForm } from "../navigation/types";
import { isOs } from "../utils/constants";
import { common, search } from "../styles";
import { Card, Typography, Input, Button } from "../components";

type Props = {
  navigation: StackNavigationProp<RootNavigation, "Search">
}

const SearchScreen:React.FC<Props> = ({ navigation }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch:Dispatch<Action> | undefined = useDispatch();

  const form:UseForm = useForm({
    initState: {
      id: ""
    },
    onSubmit: (values: any) => {
      searchAsteroid(values.id).then(dispatchAction);
    }
  });

  const fetchRandomAsteroid = () => {
    setLoading(true);
    getRandomAsteroid().then(dispatchAction)
  }

  const dispatchAction = (action: any) => {
    setLoading(false);
    form.setSubmitting(false);
    dispatch?.(action);
    if(action.success){
      navigation.navigate("Details");
    }
  }

  return(
    <View style={common.container}>
      <KeyboardAvoidingView behavior={isOs("ios")? "padding": undefined}>
        <Card>
          <Typography>
            Enter an Asteroid ID to search
          </Typography>
          <Input
            onChange={form.handleChange("id")}
            onBlur={form.handleBlur("id")}
            value={form.values.id}
            placeholder="Asteroid ID"
            touched={form.touched.id}
            errorText={form.errors.id}
          />
          <Button
            onPress={form.handleSubmit}
            disabled={form.submitting}
            loading={form.submitting}
          >
            Search
          </Button>
          <Button
            onPress={fetchRandomAsteroid}
            style={search.button}
            disabled={loading}
            loading={loading}
          >
            Random Asteroid
          </Button>
        </Card>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SearchScreen;