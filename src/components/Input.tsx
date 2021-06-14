import React from "react";
import { TextInput } from "react-native";

import { isValid } from "../utils/helpers";
import { components } from "../styles";
import { Typography, inputProps } from ".";

type Props = {
  value: string;
  onChange: (t: string) => void;
  onBlur: () => void;
  placeholder?: string;
  touched: boolean;
  errorText?: string;
}

const Input:React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  onBlur,
  touched,
  errorText
}) => {

  return(
    <>
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={components.input}
        placeholder={placeholder}
      />
      {(touched && isValid(errorText)) && (
        <Typography style={components.errorText}>
          {errorText}
        </Typography>
      )}
    </>
  );
}

Input.defaultProps = inputProps;

export default Input;