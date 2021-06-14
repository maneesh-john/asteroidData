import { useState } from "react";

import { Form } from "../navigation/types";
import { isValid } from "../utils/helpers";
import { requiredField } from "../actions/messages";

type Props = {
  initState: Form;
  onSubmit: (v: Form) => void;
}

const useForm = ({
  initState,
  onSubmit
}: Props) => {

  const [values, setValues] = useState<Form>(initState);
  const [touched, setTouched] = useState<any>({});
  const [errors, setErrors] = useState<Form>(initState);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (name: string) => {
    return (text: string) => {
      setValues({ ...values, [name]: text });
      if(isValid(text)){
        setErrors({ ...errors, [name]: "" });
      }
    }
  }

  const handleBlur = (name: string) => {
    return () => {
      setTouched({ ...values, [name]: true });
    }
  }

  const touchAllFields = () => {
    const newTouched = Object.keys(values).reduce((acc, key: string) => {
      return { ...acc, [key]: true };
    }, {});
    setTouched(newTouched);
  }

  const verify = () => {
    const validForm = Object.keys(values).some((key: string) => {
      const invalidField = !isValid(values?.[key]);
      if(invalidField){
        setErrors({ ...errors, [key]: requiredField });
      }
      return invalidField;
    });
    return validForm;
  }

  const handleSubmit = () => {
    touchAllFields();
    if(verify()) return;
    setSubmitting(true);
    onSubmit(values);
  }

  return {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    submitting,
    setSubmitting
  };
}

export default useForm;