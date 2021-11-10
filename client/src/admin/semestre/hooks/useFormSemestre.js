import { useState } from "react";

export const useFormSemestre = (initForm) => {
  const [form, setForm] = useState(initForm);
  const handlerChangeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const resetForm = () => {
    setForm(initForm);
  };
  return [form, handlerChangeForm, resetForm];
};
