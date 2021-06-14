import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { Provider } from "./src/contexts/AppContext";
import { common } from "./src/styles";
import Navigation from "./src/navigation/Navigation";
import { ErrorModal } from "./src/components";
import { colors } from "./src/utils/constants";

const App = () => {

  return (
    <>
      <SafeAreaView style={common.safeArea}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.main}
        />
        <Provider>
          <Navigation />
          <ErrorModal />
        </Provider>
      </SafeAreaView>
      <SafeAreaView />
    </>
  );
};

export default App;
