import { useState } from "react";

export const useForm = (initForm) => {
  const [form, setForm] = useState(initForm);
  const handlerChangeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const handlerResetForm = () => {
    setForm(initForm);
  };
  //para crear user

  const [formUser, setFormUser] = useState(initForm);
  const handlerChangeFormUser = ({ target }) => {
    setFormUser({ ...formUser, [target.name]: target.value });
  };
  const handlerResetFormUser = ({ target }) => {
    setFormUser(initForm);
  };

  return [
    form,
    handlerChangeForm,
    handlerResetForm,
    formUser,
    handlerChangeFormUser,
    handlerResetFormUser,
  ];
};
