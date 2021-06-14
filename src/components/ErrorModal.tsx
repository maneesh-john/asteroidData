import React, { Dispatch } from "react";
import { Modal, View } from "react-native";

import { useDispatch, useStore } from "../contexts/AppContext";
import { CLOSE_MODAL } from "../actions/types";
import { State, Action } from "../contexts/appReducer";
import { common, components } from "../styles";
import { Card, Typography, Button } from ".";

const ErrorModal:React.FC = () => {

  const dispatch:Dispatch<Action> | undefined = useDispatch();
  const state:State | undefined = useStore();

  const closeModal = () => {
    dispatch?.({
      type: CLOSE_MODAL,
      payload: {}
    });
  }

  return(
    <Modal
      visible={state?.showModal}
      onDismiss={closeModal}
      animated
      animationType="fade"
    >
      <View style={[common.container, components.modalView]}>
        <Card>
          <Typography style={components.modalText}>
            {state?.errorMessage}
          </Typography>
          <Button onPress={closeModal}>
            Close
          </Button>
        </Card>
      </View>
    </Modal>
  );
}

export default ErrorModal;