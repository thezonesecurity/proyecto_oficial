import React, { useContext, useState } from "react";
import { useForm } from "../../../../materia/hooks/useForm";
import { ActionsH } from "../../constants/ActionsH";
import DataHorario from "../../contex/AppContexH";
import { OpcionesMateriaS1 } from "./OpcionesMateriaS1";
import uniqid from "uniqid";
export const TablaSemestre1 = () => {
  const [box1A, setBox1A] = useState({ valor1A: "" });
  const handleChangeBox1A = (e) => {
    e.preventDefault();
    // console.log("valueBox1A", e.target.value);
    setBox1A(e.target.value);
  };
  //console.log("valorBox1A", box1A);
  const [box1B, setBox1B] = useState({ valor1B: "" });
  const handleChangeBox1B = (e) => {
    e.preventDefault();
    setBox1B(e.target.value);
  };
  const [box1C, setBox1C] = useState({ valor1C: "" });
  const handleChangeBox1C = (e) => {
    e.preventDefault();
    setBox1C(e.target.value);
  };
  const [box1D, setBox1D] = useState({ valor1D: "" });
  const handleChangeBox1D = (e) => {
    e.preventDefault();
    setBox1D(e.target.value);
  };
  const [box1E, setBox1E] = useState({ valor1E: "" });
  const handleChangeBox1E = (e) => {
    e.preventDefault();
    setBox1E(e.target.value);
  };
  //fila 2
  const [box2A, setBox2A] = useState({ valor2A: "" });
  const handleChangeBox2A = (e) => {
    e.preventDefault();
    setBox2A(e.target.value);
  };
  const [box2B, setBox2B] = useState({ valor2B: "" });
  const handleChangeBox2B = (e) => {
    e.preventDefault();
    setBox2B(e.target.value);
  };
  const [box2C, setBox2C] = useState({ valor2C: "" });
  const handleChangeBox2C = (e) => {
    e.preventDefault();
    setBox2C(e.target.value);
  };
  const [box2D, setBox2D] = useState({ valor2D: "" });
  const handleChangeBox2D = (e) => {
    e.preventDefault();
    setBox2D(e.target.value);
  };
  const [box2E, setBox2E] = useState({ valor2E: "" });
  const handleChangeBox2E = (e) => {
    e.preventDefault();
    setBox2E(e.target.value);
  };
  //fila 3
  const [box3A, setBox3A] = useState({ valor3A: "" });
  const handleChangeBox3A = (e) => {
    e.preventDefault();
    setBox3A(e.target.value);
  };
  const [box3B, setBox3B] = useState({ valor3B: "" });
  const handleChangeBox3B = (e) => {
    e.preventDefault();
    setBox3B(e.target.value);
  };
  const [box3C, setBox3C] = useState({ valor3C: "" });
  const handleChangeBox3C = (e) => {
    e.preventDefault();
    setBox3C(e.target.value);
  };
  const [box3D, setBox3D] = useState({ valor3D: "" });
  const handleChangeBox3D = (e) => {
    e.preventDefault();
    setBox3D(e.target.value);
  };
  const [box3E, setBox3E] = useState({ valor3E: "" });
  const handleChangeBox3E = (e) => {
    e.preventDefault();
    setBox3E(e.target.value);
  };
  //fila 4
  const [box4A, setBox4A] = useState({ valor4A: "" });
  const handleChangeBox4A = (e) => {
    e.preventDefault();
    setBox4A(e.target.value);
  };
  const [box4B, setBox4B] = useState({ valor4B: "" });
  const handleChangeBox4B = (e) => {
    e.preventDefault();
    setBox4B(e.target.value);
  };
  const [box4C, setBox4C] = useState({ valor4C: "" });
  const handleChangeBox4C = (e) => {
    e.preventDefault();
    setBox4C(e.target.value);
  };
  const [box4D, setBox4D] = useState({ valor4D: "" });
  const handleChangeBox4D = (e) => {
    e.preventDefault();
    setBox4D(e.target.value);
  };
  const [box4E, setBox4E] = useState({ valor4E: "" });
  const handleChangeBox4E = (e) => {
    e.preventDefault();
    setBox4E(e.target.value);
  };
  //fila 5
  const [box5A, setBox5A] = useState({ valor5A: "" });
  const handleChangeBox5A = (e) => {
    e.preventDefault();
    setBox5A(e.target.value);
  };
  const [box5B, setBox5B] = useState({ valor5B: "" });
  const handleChangeBox5B = (e) => {
    e.preventDefault();
    setBox5B(e.target.value);
  };
  const [box5C, setBox5C] = useState({ valor5C: "" });
  const handleChangeBox5C = (e) => {
    e.preventDefault();
    setBox5C(e.target.value);
  };
  const [box5D, setBox5D] = useState({ valor5D: "" });
  const handleChangeBox5D = (e) => {
    e.preventDefault();
    setBox5D(e.target.value);
  };
  const [box5E, setBox5E] = useState({ valor5E: "" });
  const handleChangeBox5E = (e) => {
    e.preventDefault();
    setBox5E(e.target.value);
  };
  //fila 6
  const [box6A, setBox6A] = useState({ valor6A: "" });
  const handleChangeBox6A = (e) => {
    e.preventDefault();
    setBox6A(e.target.value);
  };
  const [box6B, setBox6B] = useState({ valor6B: "" });
  const handleChangeBox6B = (e) => {
    e.preventDefault();
    setBox6B(e.target.value);
  };
  const [box6C, setBox6C] = useState({ valor6C: "" });
  const handleChangeBox6C = (e) => {
    e.preventDefault();
    setBox6C(e.target.value);
  };
  const [box6D, setBox6D] = useState({ valor6D: "" });
  const handleChangeBox6D = (e) => {
    e.preventDefault();
    setBox6D(e.target.value);
  };
  const [box6E, setBox6E] = useState({ valor6E: "" });
  const handleChangeBox6E = (e) => {
    e.preventDefault();
    setBox6E(e.target.value);
  };
  //fila 8
  const [box8A, setBox8A] = useState({ valor8A: "" });
  const handleChangeBox8A = (e) => {
    e.preventDefault();
    setBox8A(e.target.value);
  };
  const [box8B, setBox8B] = useState({ valor8B: "" });
  const handleChangeBox8B = (e) => {
    e.preventDefault();
    setBox8B(e.target.value);
  };
  const [box8C, setBox8C] = useState({ valor8C: "" });
  const handleChangeBox8C = (e) => {
    e.preventDefault();
    setBox8C(e.target.value);
  };
  const [box8D, setBox8D] = useState({ valor8D: "" });
  const handleChangeBox8D = (e) => {
    e.preventDefault();
    setBox8D(e.target.value);
  };
  const [box8E, setBox8E] = useState({ valor8E: "" });
  const handleChangeBox8E = (e) => {
    e.preventDefault();
    setBox8E(e.target.value);
  };
  //fila 9
  const [box9A, setBox9A] = useState({ valor9A: "" });
  const handleChangeBox9A = (e) => {
    e.preventDefault();
    setBox9A(e.target.value);
  };
  const [box9B, setBox9B] = useState({ valor9B: "" });
  const handleChangeBox9B = (e) => {
    e.preventDefault();
    setBox9B(e.target.value);
  };
  const [box9C, setBox9C] = useState({ valor9C: "" });
  const handleChangeBox9C = (e) => {
    e.preventDefault();
    setBox9C(e.target.value);
  };
  const [box9D, setBox9D] = useState({ valor9D: "" });
  const handleChangeBox9D = (e) => {
    e.preventDefault();
    setBox9D(e.target.value);
  };
  const [box9E, setBox9E] = useState({ valor9E: "" });
  const handleChangeBox9E = (e) => {
    e.preventDefault();
    setBox9E(e.target.value);
  };
  //fila 10
  const [box10A, setBox10A] = useState({ valor10A: "" });
  const handleChangeBox10A = (e) => {
    e.preventDefault();
    setBox10A(e.target.value);
  };
  const [box10B, setBox10B] = useState({ valor10B: "" });
  const handleChangeBox10B = (e) => {
    e.preventDefault();
    setBox10B(e.target.value);
  };
  const [box10C, setBox10C] = useState({ valor10C: "" });
  const handleChangeBox10C = (e) => {
    e.preventDefault();
    setBox10C(e.target.value);
  };
  const [box10D, setBox10D] = useState({ valor10D: "" });
  const handleChangeBox10D = (e) => {
    e.preventDefault();
    setBox10D(e.target.value);
  };
  const [box10E, setBox10E] = useState({ valor10E: "" });
  const handleChangeBox10E = (e) => {
    e.preventDefault();
    setBox10E(e.target.value);
  };
  //fila 11
  const [box11A, setBox11A] = useState({ valor11A: "" });
  const handleChangeBox11A = (e) => {
    e.preventDefault();
    setBox11A(e.target.value);
  };
  const [box11B, setBox11B] = useState({ valor11B: "" });
  const handleChangeBox11B = (e) => {
    e.preventDefault();
    setBox11B(e.target.value);
  };
  const [box11C, setBox11C] = useState({ valor11C: "" });
  const handleChangeBox11C = (e) => {
    e.preventDefault();
    setBox11C(e.target.value);
  };
  const [box11D, setBox11D] = useState({ valor11D: "" });
  const handleChangeBox11D = (e) => {
    e.preventDefault();
    setBox11D(e.target.value);
  };
  const [box11E, setBox11E] = useState({ valor11E: "" });
  const handleChangeBox11E = (e) => {
    e.preventDefault();
    setBox11E(e.target.value);
  };
  //fila 12
  const [box12A, setBox12A] = useState({ valor12A: "" });
  const handleChangeBox12A = (e) => {
    e.preventDefault();
    setBox12A(e.target.value);
  };
  const [box12B, setBox12B] = useState({ valor12B: "" });
  const handleChangeBox12B = (e) => {
    e.preventDefault();
    setBox12B(e.target.value);
  };
  const [box12C, setBox12C] = useState({ valor12C: "" });
  const handleChangeBox12C = (e) => {
    e.preventDefault();
    setBox12C(e.target.value);
  };
  const [box12D, setBox12D] = useState({ valor12D: "" });
  const handleChangeBox12D = (e) => {
    e.preventDefault();
    setBox12D(e.target.value);
  };
  const [box12E, setBox12E] = useState({ valor12E: "" });
  const handleChangeBox12E = (e) => {
    e.preventDefault();
    setBox12E(e.target.value);
  };
  //fila 13
  const [box13A, setBox13A] = useState({ valor13A: "" });
  const handleChangeBox13A = (e) => {
    e.preventDefault();
    setBox13A(e.target.value);
  };
  const [box13B, setBox13B] = useState({ valor13B: "" });
  const handleChangeBox13B = (e) => {
    e.preventDefault();
    setBox13B(e.target.value);
  };
  const [box13C, setBox13C] = useState({ valor13C: "" });
  const handleChangeBox13C = (e) => {
    e.preventDefault();
    setBox13C(e.target.value);
  };
  const [box13D, setBox13D] = useState({ valor13D: "" });
  const handleChangeBox13D = (e) => {
    e.preventDefault();
    setBox13D(e.target.value);
  };
  const [box13E, setBox13E] = useState({ valor13E: "" });
  const handleChangeBox13E = (e) => {
    e.preventDefault();
    setBox13E(e.target.value);
  };
  //console.log(horaFin);
  const { state, setState, dispatch } = useContext(DataHorario);
  //console.log("statehHorario", state);
  const [form, handlerChangeForm] = useForm({
    casilla1A: "",
    casilla1B: "",
    casilla1C: "",
    casilla1D: "",
    casilla1E: "",
    //
    casilla2A: "",
    casilla2B: "",
    casilla2C: "",
    casilla2D: "",
    casilla2E: "",
    //
    casilla3A: "",
    casilla3B: "",
    casilla3C: "",
    casilla3D: "",
    casilla3E: "",
    //
    casilla4A: "",
    casilla4B: "",
    casilla4C: "",
    casilla4D: "",
    casilla4E: "",
    //
    casilla5A: "",
    casilla5B: "",
    casilla5C: "",
    casilla5D: "",
    casilla5E: "",
    //
    casilla6A: "",
    casilla6B: "",
    casilla6C: "",
    casilla6D: "",
    casilla6E: "",
    // casilla 7 descanso
    casilla7A: "",
    casilla7B: "",
    casilla7C: "",
    casilla7D: "",
    casilla7E: "",
    //
    casilla8A: "",
    casilla8B: "",
    casilla8C: "",
    casilla8D: "",
    casilla8E: "",
    //
    casilla9A: "",
    casilla9B: "",
    casilla9C: "",
    casilla9D: "",
    casilla9E: "",
    //
    casilla10A: "",
    casilla10B: "",
    casilla10C: "",
    casilla10D: "",
    casilla10E: "",
    //
    casilla11A: "",
    casilla11B: "",
    casilla11C: "",
    casilla11D: "",
    casilla11E: "",
    //
    casilla12A: "",
    casilla12B: "",
    casilla12C: "",
    casilla12D: "",
    casilla12E: "",
    //
    casilla13A: "",
    casilla13B: "",
    casilla13C: "",
    casilla13D: "",
    casilla13E: "",
  });
  console.log("formHorario", form);

  form.casilla1A = { box1A, id: uniqid() };
  form.casilla1B = { box1B, id: uniqid() };
  form.casilla1C = { box1C, id: uniqid() };
  form.casilla1D = { box1D, id: uniqid() };
  form.casilla1E = { box1E, id: uniqid() };
  form.casilla2A = { box2A, id: uniqid() };
  form.casilla2B = { box2B, id: uniqid() };
  form.casilla2C = { box2C, id: uniqid() };
  form.casilla2D = { box2D, id: uniqid() };
  form.casilla2E = { box2E, id: uniqid() };
  form.casilla3A = { box3A, id: uniqid() };
  form.casilla3B = { box3B, id: uniqid() };
  form.casilla3C = { box3C, id: uniqid() };
  form.casilla3D = { box3D, id: uniqid() };
  form.casilla3E = { box3E, id: uniqid() };
  form.casilla4A = { box4A, id: uniqid() };
  form.casilla4B = { box4B, id: uniqid() };
  form.casilla4C = { box4C, id: uniqid() };
  form.casilla4D = { box4D, id: uniqid() };
  form.casilla4E = { box4E, id: uniqid() };
  form.casilla5A = { box5A, id: uniqid() };
  form.casilla5B = { box5B, id: uniqid() };
  form.casilla5C = { box5C, id: uniqid() };
  form.casilla5D = { box5D, id: uniqid() };
  form.casilla5E = { box5E, id: uniqid() };
  form.casilla6A = { box6A, id: uniqid() };
  form.casilla6B = { box6B, id: uniqid() };
  form.casilla6C = { box6C, id: uniqid() };
  form.casilla6D = { box6D, id: uniqid() };
  form.casilla6E = { box6E, id: uniqid() };
  form.casilla8A = { box8A, id: uniqid() };
  form.casilla8B = { box8B, id: uniqid() };
  form.casilla8C = { box8C, id: uniqid() };
  form.casilla8D = { box8D, id: uniqid() };
  form.casilla8E = { box8E, id: uniqid() };
  form.casilla9A = { box9A, id: uniqid() };
  form.casilla9B = { box9B, id: uniqid() };
  form.casilla9C = { box9C, id: uniqid() };
  form.casilla9D = { box9D, id: uniqid() };
  form.casilla9E = { box9E, id: uniqid() };
  form.casilla10A = { box10A, id: uniqid() };
  form.casilla10B = { box10B, id: uniqid() };
  form.casilla10C = { box10C, id: uniqid() };
  form.casilla10D = { box10D, id: uniqid() };
  form.casilla10E = { box10E, id: uniqid() };
  form.casilla11A = { box11A, id: uniqid() };
  form.casilla11B = { box11B, id: uniqid() };
  form.casilla11C = { box11C, id: uniqid() };
  form.casilla11D = { box11D, id: uniqid() };
  form.casilla11E = { box11E, id: uniqid() };
  form.casilla12A = { box12A, id: uniqid() };
  form.casilla12B = { box12B, id: uniqid() };
  form.casilla12C = { box12C, id: uniqid() };
  form.casilla12D = { box12D, id: uniqid() };
  form.casilla12E = { box12E, id: uniqid() };
  form.casilla13A = { box13A, id: uniqid() };
  form.casilla13B = { box13B, id: uniqid() };
  form.casilla13C = { box13C, id: uniqid() };
  form.casilla13D = { box13D, id: uniqid() };
  form.casilla13E = { box13E, id: uniqid() };
  // LOGICA PARA GUARDAR LA TABLA
  const { stateH, dispatchH } = useContext(DataHorario);
  const handlerSubmitSaveHorario = (e) => {
    e.preventDefault();
    dispatchH({
      type: ActionsH.ADD_FORM_H,
      payload: { ...form },
    });
  };
  return (
    <tbody>
      <tr>
        <th>07:45-08:45</th>
        <td>
          {/**<OpcionesMateriaS1 id={casilla1A} value={casilla1A} /> */}
          <select
            className="col-form-label"
            id="casilla1A"
            value={box1A.valor1A}
            onChange={handleChangeBox1A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>{" "}
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1B"
            value={box1B.valor1B}
            onChange={handleChangeBox1B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>{" "}
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1C"
            value={box1C.valor1C}
            onChange={handleChangeBox1C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>{" "}
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1D"
            value={box1D.valor1D}
            onChange={handleChangeBox1D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>{" "}
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box1E.valor1E}
            onChange={handleChangeBox1E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>{" "}
        </td>
      </tr>
      {/*FILA 2 */}
      <tr>
        <th>08:30-09:15</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box2A.valor2A}
            onChange={handleChangeBox2A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box2B.valor2B}
            onChange={handleChangeBox2B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box2C.valor2C}
            onChange={handleChangeBox2C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box2D.valor2D}
            onChange={handleChangeBox2D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box2E.valor2E}
            onChange={handleChangeBox2E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 3 */}
      <tr>
        <th>09:15-10:00</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box3A.valor3A}
            onChange={handleChangeBox3A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box3B.valor3B}
            onChange={handleChangeBox3B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box3C.valor3C}
            onChange={handleChangeBox3C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box3D.valor3D}
            onChange={handleChangeBox3D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box3E.valor3E}
            onChange={handleChangeBox3E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 4 */}
      <tr>
        <th>10:00-10:45</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box4A.valor4A}
            onChange={handleChangeBox4A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box4B.valor4B}
            onChange={handleChangeBox4B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box4C.valor4C}
            onChange={handleChangeBox4C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box4D.valor4D}
            onChange={handleChangeBox4D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box4E.valor4E}
            onChange={handleChangeBox4E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 5 */}
      <tr>
        <th>10:45-11:30</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box5A.valor5A}
            onChange={handleChangeBox5A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box5B.valor5B}
            onChange={handleChangeBox5B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box5C.valor5C}
            onChange={handleChangeBox5C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box5D.valor5D}
            onChange={handleChangeBox5D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box5E.valor5E}
            onChange={handleChangeBox5E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 6 */}
      <tr>
        <th>11:30-12:15</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box6A.valor6A}
            onChange={handleChangeBox6A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box6B.valor6B}
            onChange={handleChangeBox6B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box6C.valor6C}
            onChange={handleChangeBox6C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box6D.valor6D}
            onChange={handleChangeBox6D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box6E.valor6E}
            onChange={handleChangeBox6E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 7 */}
      <tr>
        <th>12:15-14:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {/*FILA 8 */}
      <tr>
        <th>14:00-14:45</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box8A.valor8A}
            onChange={handleChangeBox8A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box8B.valor8B}
            onChange={handleChangeBox8B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box8C.valor8C}
            onChange={handleChangeBox8C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box8D.valor8D}
            onChange={handleChangeBox8D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box8E.valor8E}
            onChange={handleChangeBox8E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 9 */}
      <tr>
        <th>14:45-15:30</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box9A.valor9A}
            onChange={handleChangeBox9A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box9B.valor9B}
            onChange={handleChangeBox9B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box9C.valor9C}
            onChange={handleChangeBox9C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box9D.valor9D}
            onChange={handleChangeBox9D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box9E.valor9E}
            onChange={handleChangeBox9E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 10 */}
      <tr>
        <th>15:30-16:15</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box10A.valor10A}
            onChange={handleChangeBox10A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box10B.valor10B}
            onChange={handleChangeBox10B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box10C.valor10C}
            onChange={handleChangeBox10C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box10D.valor10D}
            onChange={handleChangeBox10D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box10E.valor10E}
            onChange={handleChangeBox10E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 11 */}
      <tr>
        <th>16:15-17:00</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box11A.valor11A}
            onChange={handleChangeBox11A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box11B.valor11B}
            onChange={handleChangeBox11B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box11C.valor11C}
            onChange={handleChangeBox11C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box11D.valor11D}
            onChange={handleChangeBox11D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box11E.valor11E}
            onChange={handleChangeBox11E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 12 */}
      <tr>
        <th>17:00-17:45</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box12A.valor12A}
            onChange={handleChangeBox12A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box12B.valor12B}
            onChange={handleChangeBox12B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box12C.valor12C}
            onChange={handleChangeBox12C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box12D.valor12D}
            onChange={handleChangeBox12D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box12E.valor12E}
            onChange={handleChangeBox12E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      {/*FILA 13 */}
      <tr>
        <th>17:45-18:30</th>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box13A.valor13A}
            onChange={handleChangeBox13A}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box13B.valor13B}
            onChange={handleChangeBox13B}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box13C.valor13C}
            onChange={handleChangeBox13C}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box13D.valor13D}
            onChange={handleChangeBox13D}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
        <td>
          <select
            className="col-form-label"
            id="casilla1E"
            value={box13E.valor13E}
            onChange={handleChangeBox13E}
          >
            <option value="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <button
            type="button"
            className="btn btn-success"
            onClick={handlerSubmitSaveHorario}
          >
            Guardar
          </button>
        </td>
      </tr>
    </tbody>
  );
};
