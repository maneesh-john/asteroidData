export type RootNavigation = {
  Search: undefined;
  Details: undefined;
}

export type Form = {
  [key: string]: string;
}

export type UseForm = {
  values: Form;
  touched: any;
  errors: Form;
  handleChange: (n: string) => (t: string) => void;
  handleBlur: (n: string) => () => void;
  submitting: boolean;
  setSubmitting: (x: boolean) => void;
  handleSubmit: () => void;
}