import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";

import DataHorario from "./contex/AppContexH";
import ModalListaHorario from "./ModalListaHorario";

export const ListaHorario = (props) => {
  //console.log("props", props);
  //const { stateH, dispatchH } = useContext(DataHorario);
  //console.log("stateHHHHH", stateH);
  return (
    <>
      <tbody>
        <tr key={props._id} className="table-active">
          <th scope="row">{props.hora}</th>
          <td>{props.lunes}</td>
          <td>{props.martes}</td>
          <td>{props.miercoles}</td>
          <td>{props.jueves}</td>
          <td>{props.viernes}</td>
          <td>
            <ModalListaHorario dataItem={props} />
          </td>
        </tr>
      </tbody>
    </>
  );
};
/*

 {stateH.map((item) => {
            return <MdDelete key={item.id} {...item} />;
          })}

{dataMateria.length >0 ? (
  dataMateria.map((item) => {
    return <contenidolista  key={item.id} {...item} />
  })
):(<td>null</td>)}



 <tbody>
      <tr>
        <td>08:00 - 08:45</td>
        <td>
          {stateH.length > 0 ? (
            stateH.map((item) => {
              return <MdDelete key={item.id} {...item} />;
            })
          ) : (
            <tbody>
              <tr>
                <td>null</td>
              </tr>
            </tbody>
          )}

          <ModalListaHorario />
        </td>
        <td>
          {stateH.length > 0 ? (
            stateH.map((item) => {
              return <MdDelete key={item.id} {...item} />;
            })
          ) : (
            <tbody>
              <tr>
                <td>null</td>
              </tr>
            </tbody>
          )}
          <ModalListaHorario />
        </td>
        <td>
          {stateH.length > 0 ? (
            stateH.map((item) => {
              return <MdDelete key={item.id} {...item} />;
            })
          ) : (
            <tbody>
              <tr>
                <td>null</td>
              </tr>
            </tbody>
          )}
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
      <tr>
        <td>09:00 - 09:45</td>
        <td>
          <span>Analisis</span>
          <div className="deleteIcon">
            <MdDelete />
          </div>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
      <tr>
        <td>10:00 - 10:45</td>
        <td>
          <span>Diseño</span>
          <div className="deleteIcon">
            <MdDelete />
          </div>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />{" "}
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
      <tr>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
      </tr>
      <tr>
        <td>15:00 - 15:45</td>
        <td>
          <span>Distribuidos</span>
          <div className="deleteIcon">
            <MdDelete />
          </div>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
      <tr>
        <td>14:00 - 14:45</td>
        <td>
          <span>Sistemas</span>
          <div className="deleteIcon">
            <MdDelete />
          </div>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
      <tr>
        <td>18:00 - 18:45</td>
        <td>
          <span>Ingles</span>
          <div className="deleteIcon">
            <MdDelete />
          </div>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
        <td>
          <ModalListaHorario />
        </td>
      </tr>
    </tbody>

*/
