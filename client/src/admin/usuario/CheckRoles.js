import React, { Component, Fragment, useState } from "react";
import Select from "react-select";
const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" },
  { value: "amarillo", label: "amarillo" },
  { value: "negro", label: "negro" },
];

export const CheckRoles = () => {
  const state = {
    selectedOption: null,
  };
  const [sta, setSta] = useState();
  const handleChange = (selectedOption) => {
    setSta({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Fragment>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={options}
        onChange={handleChange}
        isMulti
      />
    </Fragment>
  );
};
