import { useState } from "react";

export const useForm = (initForm) => {
  const [form, setFrom] = useState(initForm);
  const handlerChangeForm = ({ target }) => {
    setFrom({ ...form, [target.name]: target.value });
  };
  const resetForm = () => {
    setFrom(initForm);
  };
  return [form, handlerChangeForm, resetForm];
};
