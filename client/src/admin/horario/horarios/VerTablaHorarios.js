import React from "react";

export const VerTablaHorarios = (props) => {
  console.log("tablahorariio Props", props);
  //<td key={props.casilla1A.id}>{props.casilla1A.box1A}</td>
  return (
    <tbody>
      <tr>
        <th>07:45-08:30</th>
        {props.casilla1A.box1A.valor1A != "" ? (
          <td key={props.casilla1A.id}>{props.casilla1A.box1A}</td>
        ) : (
          <td key={props.casilla1A.id}>campo sin asignar</td>
        )}
        {props.casilla1B.box1B.valor1B != "" ? (
          <td key={props.casilla1B.id}>{props.casilla1B.box1B}</td>
        ) : (
          <td key={props.casilla1B.id}>campo sin asignar</td>
        )}
        {props.casilla1C.box1C.valor1C != "" ? (
          <td key={props.casilla1C.id}>{props.casilla1C.box1C}</td>
        ) : (
          <td key={props.casilla1C.id}>campo sin asignar</td>
        )}
        {props.casilla1D.box1D.valor1D != "" ? (
          <td key={props.casilla1D.id}>{props.casilla1D.box1D}</td>
        ) : (
          <td key={props.casilla1D.id}>campo sin asignar</td>
        )}
        {props.casilla1E.box1E.valor1E != "" ? (
          <td key={props.casilla1E.id}>{props.casilla1E.box1E}</td>
        ) : (
          <td key={props.casilla1E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>08:30-09:15</th>
        {props.casilla2A.box2A.valor2A != "" ? (
          <td key={props.casilla2A.id}>{props.casilla2A.box2A}</td>
        ) : (
          <td key={props.casilla2A.id}>campo sin asignar</td>
        )}
        {props.casilla2B.box2B.valor2B != "" ? (
          <td key={props.casilla2B.id}>{props.casilla2B.box2B}</td>
        ) : (
          <td key={props.casilla2B.id}>campo sin asignar</td>
        )}
        {props.casilla2C.box2C.valor2C != "" ? (
          <td key={props.casilla2C.id}>{props.casilla2C.box2C}</td>
        ) : (
          <td key={props.casilla2C.id}>campo sin asignar</td>
        )}
        {props.casilla2D.box2D.valor2D != "" ? (
          <td key={props.casilla2D.id}>{props.casilla2D.box2D}</td>
        ) : (
          <td key={props.casilla2D.id}>campo sin asignar</td>
        )}
        {props.casilla2E.box2E.valor2E != "" ? (
          <td key={props.casilla2E.id}>{props.casilla2E.box2E}</td>
        ) : (
          <td key={props.casilla2E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>09:15-10:00</th>
        {props.casilla3A.box3A.valor3A != "" ? (
          <td key={props.casilla3A.id}>{props.casilla3A.box3A}</td>
        ) : (
          <td key={props.casilla3A.id}>campo sin asignar</td>
        )}
        {props.casilla3B.box3B.valor3B != "" ? (
          <td key={props.casilla3B.id}>{props.casilla3B.box3B}</td>
        ) : (
          <td key={props.casilla3B.id}>campo sin asignar</td>
        )}
        {props.casilla3C.box3C.valor3C != "" ? (
          <td key={props.casilla3C.id}>{props.casilla3C.box3C}</td>
        ) : (
          <td key={props.casilla3C.id}>campo sin asignar</td>
        )}
        {props.casilla3D.box3D.valor3D != "" ? (
          <td key={props.casilla3D.id}>{props.casilla3D.box3D}</td>
        ) : (
          <td key={props.casilla3D.id}>campo sin asignar</td>
        )}
        {props.casilla3E.box3E.valor3E != "" ? (
          <td key={props.casilla3E.id}>{props.casilla3E.box3E}</td>
        ) : (
          <td key={props.casilla3E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>10:00-10:45</th>
        {props.casilla4A.box4A.valor4A != "" ? (
          <td key={props.casilla4A.id}>{props.casilla4A.box4A}</td>
        ) : (
          <td key={props.casilla4A.id}>campo sin asignar</td>
        )}
        {props.casilla4B.box4B.valor4B != "" ? (
          <td key={props.casilla4B.id}>{props.casilla4B.box4B}</td>
        ) : (
          <td key={props.casilla4B.id}>campo sin asignar</td>
        )}
        {props.casilla4C.box4C.valor4C != "" ? (
          <td key={props.casilla4C.id}>{props.casilla4C.box4C}</td>
        ) : (
          <td key={props.casilla4C.id}>campo sin asignar</td>
        )}
        {props.casilla4D.box4D.valor4D != "" ? (
          <td key={props.casilla4D.id}>{props.casilla4D.box4D}</td>
        ) : (
          <td key={props.casilla4D.id}>campo sin asignar</td>
        )}
        {props.casilla4E.box4E.valor4E != "" ? (
          <td key={props.casilla4E.id}>{props.casilla4E.box4E}</td>
        ) : (
          <td key={props.casilla4E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>10:45-11:30</th>
        {props.casilla5A.box5A.valor5A != "" ? (
          <td key={props.casilla5A.id}>{props.casilla5A.box5A}</td>
        ) : (
          <td key={props.casilla5A.id}>campo sin asignar</td>
        )}
        {props.casilla5B.box5B.valor5B != "" ? (
          <td key={props.casilla5B.id}>{props.casilla5B.box5B}</td>
        ) : (
          <td key={props.casilla5B.id}>campo sin asignar</td>
        )}
        {props.casilla5C.box5C.valor5C != "" ? (
          <td key={props.casilla5C.id}>{props.casilla5C.box5C}</td>
        ) : (
          <td key={props.casilla5C.id}>campo sin asignar</td>
        )}
        {props.casilla5D.box5D.valor5D != "" ? (
          <td key={props.casilla5D.id}>{props.casilla5D.box5D}</td>
        ) : (
          <td key={props.casilla5D.id}>campo sin asignar</td>
        )}
        {props.casilla5E.box5E.valor5E != "" ? (
          <td key={props.casilla5E.id}>{props.casilla5E.box5E}</td>
        ) : (
          <td key={props.casilla5E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>11:30-12:15</th>
        {props.casilla6A.box6A.valor6A != "" ? (
          <td key={props.casilla6A.id}>{props.casilla6A.box6A}</td>
        ) : (
          <td key={props.casilla6A.id}>campo sin asignar</td>
        )}
        {props.casilla6B.box6B.valor6B != "" ? (
          <td key={props.casilla6B.id}>{props.casilla6B.box6B}</td>
        ) : (
          <td key={props.casilla6B.id}>campo sin asignar</td>
        )}
        {props.casilla6C.box6C.valor6C != "" ? (
          <td key={props.casilla6C.id}>{props.casilla6C.box6C}</td>
        ) : (
          <td key={props.casilla6C.id}>campo sin asignar</td>
        )}
        {props.casilla6D.box6D.valor6D != "" ? (
          <td key={props.casilla6D.id}>{props.casilla6D.box6D}</td>
        ) : (
          <td key={props.casilla6D.id}>campo sin asignar</td>
        )}
        {props.casilla6E.box6E.valor6E != "" ? (
          <td key={props.casilla6E.id}>{props.casilla6E.box6E}</td>
        ) : (
          <td key={props.casilla6E.id}>campo sin asignar</td>
        )}
      </tr>
      {/*linea 7 */}
      <tr>
        <th>12:15-14:00</th>
        <td>DESCANSO</td>
        <td>DESCANSO</td>
        <td>DESCANSO</td>
        <td>DESCANSO</td>
        <td>DESCANSO</td>
      </tr>
      <tr>
        <th>14:00-14:45</th>
        {props.casilla8A.box8A.valor8A != "" ? (
          <td key={props.casilla8A.id}>{props.casilla8A.box8A}</td>
        ) : (
          <td key={props.casilla8A.id}>campo sin asignar</td>
        )}
        {props.casilla8B.box8B.valor8B != "" ? (
          <td key={props.casilla8B.id}>{props.casilla8B.box8B}</td>
        ) : (
          <td key={props.casilla8B.id}>campo sin asignar</td>
        )}
        {props.casilla8C.box8C.valor8C != "" ? (
          <td key={props.casilla8C.id}>{props.casilla8C.box8C}</td>
        ) : (
          <td key={props.casilla8C.id}>campo sin asignar</td>
        )}
        {props.casilla8D.box8D.valor8D != "" ? (
          <td key={props.casilla8D.id}>{props.casilla8D.box8D}</td>
        ) : (
          <td key={props.casilla8D.id}>campo sin asignar</td>
        )}
        {props.casilla8E.box8E.valor8E != "" ? (
          <td key={props.casilla8E.id}>{props.casilla8E.box8E}</td>
        ) : (
          <td key={props.casilla8E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>14:45-15:30</th>
        {props.casilla9A.box9A.valor9A != "" ? (
          <td key={props.casilla9A.id}>{props.casilla9A.box9A}</td>
        ) : (
          <td key={props.casilla9A.id}>campo sin asignar</td>
        )}
        {props.casilla9B.box9B.valor9B != "" ? (
          <td key={props.casilla9B.id}>{props.casilla9B.box9B}</td>
        ) : (
          <td key={props.casilla9B.id}>campo sin asignar</td>
        )}
        {props.casilla9C.box9C.valor9C != "" ? (
          <td key={props.casilla9C.id}>{props.casilla9C.box9C}</td>
        ) : (
          <td key={props.casilla9C.id}>campo sin asignar</td>
        )}
        {props.casilla9D.box9D.valor9D != "" ? (
          <td key={props.casilla9D.id}>{props.casilla9D.box9D}</td>
        ) : (
          <td key={props.casilla9D.id}>campo sin asignar</td>
        )}
        {props.casilla9E.box9E.valor9E != "" ? (
          <td key={props.casilla9E.id}>{props.casilla9E.box9E}</td>
        ) : (
          <td key={props.casilla9E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>15:30-16:15</th>
        {props.casilla10A.box10A.valor10A != "" ? (
          <td key={props.casilla10A.id}>{props.casilla10A.box10A}</td>
        ) : (
          <td key={props.casilla10A.id}>campo sin asignar</td>
        )}
        {props.casilla10B.box10B.valor10B != "" ? (
          <td key={props.casilla10B.id}>{props.casilla10B.box10B}</td>
        ) : (
          <td key={props.casilla10B.id}>campo sin asignar</td>
        )}
        {props.casilla10C.box10C.valor10C != "" ? (
          <td key={props.casilla10C.id}>{props.casilla10C.box10C}</td>
        ) : (
          <td key={props.casilla10C.id}>campo sin asignar</td>
        )}
        {props.casilla10D.box10D.valor10D != "" ? (
          <td key={props.casilla10D.id}>{props.casilla10D.box10D}</td>
        ) : (
          <td key={props.casilla10D.id}>campo sin asignar</td>
        )}
        {props.casilla10E.box10E.valor10E != "" ? (
          <td key={props.casilla10E.id}>{props.casilla10E.box10E}</td>
        ) : (
          <td key={props.casilla10E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>16:15-17:00</th>
        {props.casilla11A.box11A.valor11A != "" ? (
          <td key={props.casilla11A.id}>{props.casilla11A.box11A}</td>
        ) : (
          <td key={props.casilla11A.id}>campo sin asignar</td>
        )}
        {props.casilla11B.box11B.valor11B != "" ? (
          <td key={props.casilla11B.id}>{props.casilla11B.box11B}</td>
        ) : (
          <td key={props.casilla11B.id}>campo sin asignar</td>
        )}
        {props.casilla11C.box11C.valor11C != "" ? (
          <td key={props.casilla11C.id}>{props.casilla11C.box11C}</td>
        ) : (
          <td key={props.casilla11C.id}>campo sin asignar</td>
        )}
        {props.casilla11D.box11D.valor11D != "" ? (
          <td key={props.casilla11D.id}>{props.casilla11D.box11D}</td>
        ) : (
          <td key={props.casilla11D.id}>campo sin asignar</td>
        )}
        {props.casilla11E.box11E.valor11E != "" ? (
          <td key={props.casilla11E.id}>{props.casilla11E.box11E}</td>
        ) : (
          <td key={props.casilla11E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>17:00-17:45</th>
        {props.casilla12A.box12A.valor12A != "" ? (
          <td key={props.casilla12A.id}>{props.casilla12A.box12A}</td>
        ) : (
          <td key={props.casilla12A.id}>campo sin asignar</td>
        )}
        {props.casilla12B.box12B.valor12B != "" ? (
          <td key={props.casilla12B.id}>{props.casilla12B.box12B}</td>
        ) : (
          <td key={props.casilla12B.id}>campo sin asignar</td>
        )}
        {props.casilla12C.box12C.valor12C != "" ? (
          <td key={props.casilla12C.id}>{props.casilla12C.box12C}</td>
        ) : (
          <td key={props.casilla12C.id}>campo sin asignar</td>
        )}
        {props.casilla12D.box12D.valor12D != "" ? (
          <td key={props.casilla12D.id}>{props.casilla12D.box12D}</td>
        ) : (
          <td key={props.casilla12D.id}>campo sin asignar</td>
        )}
        {props.casilla12E.box12E.valor12E != "" ? (
          <td key={props.casilla12E.id}>{props.casilla12E.box12E}</td>
        ) : (
          <td key={props.casilla12E.id}>campo sin asignar</td>
        )}
      </tr>
      <tr>
        <th>17:45-18:30</th>
        {props.casilla13A.box13A.valor13A != "" ? (
          <td key={props.casilla13A.id}>{props.casilla13A.box13A}</td>
        ) : (
          <td key={props.casilla13A.id}>campo sin asignar</td>
        )}
        {props.casilla13B.box13B.valor13B != "" ? (
          <td key={props.casilla13B.id}>{props.casilla13B.box13B}</td>
        ) : (
          <td key={props.casilla13B.id}>campo sin asignar</td>
        )}
        {props.casilla13C.box13C.valor13C != "" ? (
          <td key={props.casilla13C.id}>{props.casilla13C.box13C}</td>
        ) : (
          <td key={props.casilla13C.id}>campo sin asignar</td>
        )}
        {props.casilla13D.box13D.valor13D != "" ? (
          <td key={props.casilla13D.id}>{props.casilla13D.box13D}</td>
        ) : (
          <td key={props.casilla13D.id}>campo sin asignar</td>
        )}
        {props.casilla13E.box13E.valor13E != "" ? (
          <td key={props.casilla13E.id}>{props.casilla13E.box13E}</td>
        ) : (
          <td key={props.casilla13E.id}>campo sin asignar</td>
        )}
      </tr>
    </tbody>
  );
};
