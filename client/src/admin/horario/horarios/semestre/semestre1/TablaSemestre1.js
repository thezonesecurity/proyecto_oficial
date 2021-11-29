import React, { useContext, useState } from "react";
import uniqid from "uniqid";

import { useForm } from "../../../../materia/hooks/useForm";
import { ActionsH } from "../../constants/ActionsH";
import DataHorario from "../../contex/AppContexH";
import { OpcionesMateriaS1 } from "./OpcionesMateriaS1";

export const TablaSemestre1 = () => {
  /*
     const [t, setT] = useState({ valor: "" });
  const test = (dato) => {
    setT(dato);
  };
  console.log("test1", t);
  console.log("formHorario", form);
  const [t2, setT2] = useState({ valor: "" });
  const test2 = (dato) => {
    setT2(dato);
  };
  console.log("test2", t2);
    */
  const [box1A, setBox1A] = useState({ valor1A: "" });
  const handleChangeBox1A = (dato) => {
    setBox1A(dato);
  };
  //console.log("valorBox1A", box1A);
  const [box1B, setBox1B] = useState({ valor1B: "" });
  const handleChangeBox1B = (dato) => {
    setBox1B(dato);
  };
  const [box1C, setBox1C] = useState({ valor1C: "" });
  const handleChangeBox1C = (dato) => {
    setBox1C(dato);
  };
  const [box1D, setBox1D] = useState({ valor1D: "" });
  const handleChangeBox1D = (dato) => {
    setBox1D(dato);
  };
  const [box1E, setBox1E] = useState({ valor1E: "" });
  const handleChangeBox1E = (dato) => {
    setBox1E(dato);
  };
  //fila 2
  const [box2A, setBox2A] = useState({ valor2A: "" });
  const handleChangeBox2A = (dato) => {
    setBox2A(dato);
  };
  const [box2B, setBox2B] = useState({ valor2B: "" });
  const handleChangeBox2B = (dato) => {
    setBox2B(dato);
  };
  const [box2C, setBox2C] = useState({ valor2C: "" });
  const handleChangeBox2C = (dato) => {
    setBox2C(dato);
  };
  const [box2D, setBox2D] = useState({ valor2D: "" });
  const handleChangeBox2D = (dato) => {
    setBox2D(dato);
  };
  const [box2E, setBox2E] = useState({ valor2E: "" });
  const handleChangeBox2E = (dato) => {
    setBox2E(dato);
  };
  //fila 3
  const [box3A, setBox3A] = useState({ valor3A: "" });
  const handleChangeBox3A = (dato) => {
    setBox3A(dato);
  };
  const [box3B, setBox3B] = useState({ valor3B: "" });
  const handleChangeBox3B = (dato) => {
    setBox3B(dato);
  };
  const [box3C, setBox3C] = useState({ valor3C: "" });
  const handleChangeBox3C = (dato) => {
    setBox3C(dato);
  };
  const [box3D, setBox3D] = useState({ valor3D: "" });
  const handleChangeBox3D = (dato) => {
    setBox3D(dato);
  };
  const [box3E, setBox3E] = useState({ valor3E: "" });
  const handleChangeBox3E = (dato) => {
    setBox3E(dato);
  };
  //fila 4
  const [box4A, setBox4A] = useState({ valor4A: "" });
  const handleChangeBox4A = (dato) => {
    setBox4A(dato);
  };
  const [box4B, setBox4B] = useState({ valor4B: "" });
  const handleChangeBox4B = (dato) => {
    setBox4B(dato);
  };
  const [box4C, setBox4C] = useState({ valor4C: "" });
  const handleChangeBox4C = (dato) => {
    setBox4C(dato);
  };
  const [box4D, setBox4D] = useState({ valor4D: "" });
  const handleChangeBox4D = (dato) => {
    setBox4D(dato);
  };
  const [box4E, setBox4E] = useState({ valor4E: "" });
  const handleChangeBox4E = (dato) => {
    setBox4E(dato);
  };
  //fila 5
  const [box5A, setBox5A] = useState({ valor5A: "" });
  const handleChangeBox5A = (dato) => {
    setBox5A(dato);
  };
  const [box5B, setBox5B] = useState({ valor5B: "" });
  const handleChangeBox5B = (dato) => {
    setBox5B(dato);
  };
  const [box5C, setBox5C] = useState({ valor5C: "" });
  const handleChangeBox5C = (dato) => {
    setBox5C(dato);
  };
  const [box5D, setBox5D] = useState({ valor5D: "" });
  const handleChangeBox5D = (dato) => {
    setBox5D(dato);
  };
  const [box5E, setBox5E] = useState({ valor5E: "" });
  const handleChangeBox5E = (dato) => {
    setBox5E(dato);
  };
  //fila 6
  const [box6A, setBox6A] = useState({ valor6A: "" });
  const handleChangeBox6A = (dato) => {
    setBox6A(dato);
  };
  const [box6B, setBox6B] = useState({ valor6B: "" });
  const handleChangeBox6B = (dato) => {
    setBox6B(dato);
  };
  const [box6C, setBox6C] = useState({ valor6C: "" });
  const handleChangeBox6C = (dato) => {
    setBox6C(dato);
  };
  const [box6D, setBox6D] = useState({ valor6D: "" });
  const handleChangeBox6D = (dato) => {
    setBox6D(dato);
  };
  const [box6E, setBox6E] = useState({ valor6E: "" });
  const handleChangeBox6E = (dato) => {
    setBox6E(dato);
  };
  //fila 8
  const [box8A, setBox8A] = useState({ valor8A: "" });
  const handleChangeBox8A = (dato) => {
    setBox8A(dato);
  };
  const [box8B, setBox8B] = useState({ valor8B: "" });
  const handleChangeBox8B = (dato) => {
    setBox8B(dato);
  };
  const [box8C, setBox8C] = useState({ valor8C: "" });
  const handleChangeBox8C = (dato) => {
    setBox8C(dato);
  };
  const [box8D, setBox8D] = useState({ valor8D: "" });
  const handleChangeBox8D = (dato) => {
    setBox8D(dato);
  };
  const [box8E, setBox8E] = useState({ valor8E: "" });
  const handleChangeBox8E = (dato) => {
    setBox8E(dato);
  };
  //fila 9
  const [box9A, setBox9A] = useState({ valor9A: "" });
  const handleChangeBox9A = (dato) => {
    setBox9A(dato);
  };
  const [box9B, setBox9B] = useState({ valor9B: "" });
  const handleChangeBox9B = (dato) => {
    setBox9B(dato);
  };
  const [box9C, setBox9C] = useState({ valor9C: "" });
  const handleChangeBox9C = (dato) => {
    setBox9C(dato);
  };
  const [box9D, setBox9D] = useState({ valor9D: "" });
  const handleChangeBox9D = (dato) => {
    setBox9D(dato);
  };
  const [box9E, setBox9E] = useState({ valor9E: "" });
  const handleChangeBox9E = (dato) => {
    setBox9E(dato);
  };
  //fila 10
  const [box10A, setBox10A] = useState({ valor10A: "" });
  const handleChangeBox10A = (dato) => {
    setBox10A(dato);
  };
  const [box10B, setBox10B] = useState({ valor10B: "" });
  const handleChangeBox10B = (dato) => {
    setBox10B(dato);
  };
  const [box10C, setBox10C] = useState({ valor10C: "" });
  const handleChangeBox10C = (dato) => {
    setBox10C(dato);
  };
  const [box10D, setBox10D] = useState({ valor10D: "" });
  const handleChangeBox10D = (dato) => {
    setBox10D(dato);
  };
  const [box10E, setBox10E] = useState({ valor10E: "" });
  const handleChangeBox10E = (dato) => {
    setBox10E(dato);
  };
  //fila 11
  const [box11A, setBox11A] = useState({ valor11A: "" });
  const handleChangeBox11A = (dato) => {
    setBox11A(dato);
  };
  const [box11B, setBox11B] = useState({ valor11B: "" });
  const handleChangeBox11B = (dato) => {
    setBox11B(dato);
  };
  const [box11C, setBox11C] = useState({ valor11C: "" });
  const handleChangeBox11C = (dato) => {
    setBox11C(dato);
  };
  const [box11D, setBox11D] = useState({ valor11D: "" });
  const handleChangeBox11D = (dato) => {
    setBox11D(dato);
  };
  const [box11E, setBox11E] = useState({ valor11E: "" });
  const handleChangeBox11E = (dato) => {
    setBox11E(dato);
  };
  //fila 12
  const [box12A, setBox12A] = useState({ valor12A: "" });
  const handleChangeBox12A = (dato) => {
    setBox12A(dato);
  };
  const [box12B, setBox12B] = useState({ valor12B: "" });
  const handleChangeBox12B = (dato) => {
    setBox12B(dato);
  };
  const [box12C, setBox12C] = useState({ valor12C: "" });
  const handleChangeBox12C = (dato) => {
    setBox12C(dato);
  };
  const [box12D, setBox12D] = useState({ valor12D: "" });
  const handleChangeBox12D = (dato) => {
    setBox12D(dato);
  };
  const [box12E, setBox12E] = useState({ valor12E: "" });
  const handleChangeBox12E = (dato) => {
    setBox12E(dato);
  };
  //fila 13
  const [box13A, setBox13A] = useState({ valor13A: "" });
  const handleChangeBox13A = (dato) => {
    setBox13A(dato);
  };
  const [box13B, setBox13B] = useState({ valor13B: "" });
  const handleChangeBox13B = (dato) => {
    setBox13B(dato);
  };
  const [box13C, setBox13C] = useState({ valor13C: "" });
  const handleChangeBox13C = (dato) => {
    setBox13C(dato);
  };
  const [box13D, setBox13D] = useState({ valor13D: "" });
  const handleChangeBox13D = (dato) => {
    setBox13D(dato);
  };
  const [box13E, setBox13E] = useState({ valor13E: "" });
  const handleChangeBox13E = (dato) => {
    setBox13E(dato);
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
          <OpcionesMateriaS1
            id="casilla1A"
            value={box1A}
            onChange={handleChangeBox1A}
            onfuc={handleChangeBox1A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla1B"
            value={box1B}
            onfuc={handleChangeBox1B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla1C"
            value={box1C}
            onfuc={handleChangeBox1C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla1D"
            value={box1D}
            onfuc={handleChangeBox1D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla1E"
            value={box1E}
            onfuc={handleChangeBox1E}
          />
        </td>
      </tr>
      {/*FILA 2 */}
      <tr>
        <th>08:30-09:15</th>
        <td>
          <OpcionesMateriaS1
            id="casilla2A"
            value={box2A}
            onfuc={handleChangeBox2A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla2B"
            value={box2B}
            onfuc={handleChangeBox2B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla2C"
            value={box2C}
            onfuc={handleChangeBox2C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla2D"
            value={box2D}
            onfuc={handleChangeBox2D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla2E"
            value={box2E}
            onfuc={handleChangeBox2E}
          />
        </td>
      </tr>
      {/*FILA 3 */}
      <tr>
        <th>09:15-10:00</th>
        <td>
          <OpcionesMateriaS1
            id="casilla3A"
            value={box3A}
            onfuc={handleChangeBox3A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla3B"
            value={box3B}
            onfuc={handleChangeBox3B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla3C"
            value={box3C}
            onfuc={handleChangeBox3C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla3D"
            value={box3D}
            onfuc={handleChangeBox3D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla3E"
            value={box3E}
            onfuc={handleChangeBox3E}
          />
        </td>
      </tr>
      {/*FILA 4 */}
      <tr>
        <th>10:00-10:45</th>
        <td>
          <OpcionesMateriaS1
            id="casilla4A"
            value={box4A}
            onfuc={handleChangeBox4A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla4B"
            value={box4B}
            onfuc={handleChangeBox4B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla4AC"
            value={box4C}
            onfuc={handleChangeBox4C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla4D"
            value={box4D}
            onfuc={handleChangeBox4D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla4E"
            value={box4E}
            onfuc={handleChangeBox4E}
          />
        </td>
      </tr>
      {/*FILA 5 */}
      <tr>
        <th>10:45-11:30</th>
        <td>
          <OpcionesMateriaS1
            id="casilla5A"
            value={box5A}
            onfuc={handleChangeBox5A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla5B"
            value={box5B}
            onfuc={handleChangeBox5B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla5C"
            value={box5C}
            onfuc={handleChangeBox5C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla5D"
            value={box5D}
            onfuc={handleChangeBox5D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla5E"
            value={box5E}
            onfuc={handleChangeBox5E}
          />
        </td>
      </tr>
      {/*FILA 6 */}
      <tr>
        <th>11:30-12:15</th>
        <td>
          <OpcionesMateriaS1
            id="casilla6A"
            value={box6A}
            onfuc={handleChangeBox6A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla6B"
            value={box6B}
            onfuc={handleChangeBox6B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla6C"
            value={box6C}
            onfuc={handleChangeBox6C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla6D"
            value={box6D}
            onfuc={handleChangeBox6D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla6E"
            value={box6E}
            onfuc={handleChangeBox6E}
          />
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
          <OpcionesMateriaS1
            id="casilla8A"
            value={box8A}
            onfuc={handleChangeBox8A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla8B"
            value={box8B}
            onfuc={handleChangeBox8B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla8C"
            value={box8C}
            onfuc={handleChangeBox8C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla8D"
            value={box8D}
            onfuc={handleChangeBox8D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla8E"
            value={box8E}
            onfuc={handleChangeBox8E}
          />
        </td>
      </tr>
      {/*FILA 9 */}
      <tr>
        <th>14:45-15:30</th>
        <td>
          <OpcionesMateriaS1
            id="casilla9A"
            value={box9A}
            onfuc={handleChangeBox9A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla9B"
            value={box9B}
            onfuc={handleChangeBox9B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla9C"
            value={box9C}
            onfuc={handleChangeBox9C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla9D"
            value={box9D}
            onfuc={handleChangeBox9D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla9E"
            value={box9E}
            onfuc={handleChangeBox9E}
          />
        </td>
      </tr>
      {/*FILA 10 */}
      <tr>
        <th>15:30-16:15</th>
        <td>
          <OpcionesMateriaS1
            id="casilla10A"
            value={box10A}
            onfuc={handleChangeBox10A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla10B"
            value={box10B}
            onfuc={handleChangeBox10B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla10C"
            value={box10C}
            onfuc={handleChangeBox10C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla10D"
            value={box10D}
            onfuc={handleChangeBox10D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla10E"
            value={box10E}
            onfuc={handleChangeBox10E}
          />
        </td>
      </tr>
      {/*FILA 11 */}
      <tr>
        <th>16:15-17:00</th>
        <td>
          <OpcionesMateriaS1
            id="casilla11A"
            value={box11A}
            onfuc={handleChangeBox11A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla11B"
            value={box11B}
            onfuc={handleChangeBox11B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla11C"
            value={box11C}
            onfuc={handleChangeBox11C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla11D"
            value={box11D}
            onfuc={handleChangeBox11D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla11E"
            value={box11E}
            onfuc={handleChangeBox11E}
          />
        </td>
      </tr>
      {/*FILA 12 */}
      <tr>
        <th>17:00-17:45</th>
        <td>
          <OpcionesMateriaS1
            id="casilla12A"
            value={box12A}
            onfuc={handleChangeBox12A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla12B"
            value={box12B}
            onfuc={handleChangeBox12B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla12C"
            value={box12C}
            onfuc={handleChangeBox12C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla12D"
            value={box12D}
            onfuc={handleChangeBox12D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla12E"
            value={box12E}
            onfuc={handleChangeBox12E}
          />
        </td>
      </tr>
      {/*FILA 13 */}
      <tr>
        <th>17:45-18:30</th>
        <td>
          <OpcionesMateriaS1
            id="casilla13A"
            value={box13A}
            onfuc={handleChangeBox13A}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla13B"
            value={box13B}
            onfuc={handleChangeBox13B}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla13C"
            value={box13C}
            onfuc={handleChangeBox13C}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla13D"
            value={box13D}
            onfuc={handleChangeBox13D}
          />
        </td>
        <td>
          <OpcionesMateriaS1
            id="casilla13E"
            value={box13E}
            onfuc={handleChangeBox13E}
          />
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
