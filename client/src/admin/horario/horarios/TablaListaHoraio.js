import React, { Fragment } from "react";
import { InputGroup } from "react-bootstrap";

export const TablaListaHoraio = ({
  elegirDia,
  elegirMateria,
  elegirSemestre,
  horaFin,
  horaInicio,
  id,
  valido,
}) => {
  console.log(horaFin);
  return (
    <tbody>
      <tr>
        <th>
          {horaInicio}-{horaFin}
        </th>
        <td>{elegirMateria}</td>
        <td>{elegirMateria}</td>
        <td>{elegirMateria}</td>
        <td>{elegirMateria}</td>
        <td>{elegirMateria}</td>
        <td></td>
      </tr>
    </tbody>
  );
};

{
  /*
{elegirDia === "lunes" &&
            horaInicio === "07:45" &&
            horaFin === "08:30" && <p>{elegirMateria}</p>}


            <Fragment>
     
    </Fragment>

    
     <tbody>
      <tr>
        <th>07:45-08:45</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>08:30-09:15</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>09:15-10:00</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>10:00-10:45</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>10:45-11:30</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>11:30-12:15</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>12:15-14:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>14:00-14:45</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>14:45-15:30</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>15:30-16:15</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>16:15-17:00</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>17:00-17:45</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
      <tr>
        <th>17:45-18:30</th>
        <td>LIN-141 G1</td>
        <td>MAT-101 G2</td>
        <td></td>
        <td>SIS-110 G1</td>
        <td>SIS-110 G1</td>
        <td></td>
      </tr>
    </tbody>
           
*/
}
