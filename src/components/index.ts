import Input from "./Input";
import Typography from "./Typography";
import Card from "./Card";
import Button from "./Button";
import Link from "./Link";
import ErrorModal from "./ErrorModal";

const buttonProps = {
  onPress: () => {},
  style: {},
  textStyle: {},
  disabled: false,
  loading: false,
  children: ""
}

const cardProps = {
  children: ""
}

const inputProps = {
  value: "",
  onChange: () => {},
  onBlur: () => {},
  placeholder: "",
  touched: false,
  errorText: ""
}

const linkProps = {
  children: ""
}

const typographyProps = {
  children: "",
  style: {}
}

export {
  Input,
  Typography,
  Button,
  Card,
  Link,
  ErrorModal,
  buttonProps,
  cardProps,
  inputProps,
  linkProps,
  typographyProps
};