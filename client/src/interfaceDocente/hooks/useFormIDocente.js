import { useState } from "react";

export const useFormIDocente = (initFormID) => {
  const [form, setForm] = useState(initFormID);
  const handlerChangeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const resetForm = () => {
    setForm(initFormID);
  };
  return [form, handlerChangeForm, resetForm];
};
