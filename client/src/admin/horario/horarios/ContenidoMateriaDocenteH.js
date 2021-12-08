import React, { useState } from "react";

export const ContenidoMateriaDocenteH = () => {
  const [valueSemestre, setValueSemestre] = useState({ valor: "" });
  /*const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setValueSemestre(e.target.value);
  };
  console.log("valueSemestre", valueSemestre);*/
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>DIseño</td>
        <td>SIS-154</td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Grupo</option>
            <option value="1">G1</option>
            <option value="2">G2</option>
            <option value="3">G3</option>
            <option value="3">G4</option>
          </select>
        </td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Docente</option>
            <option value="1">Ing. Limber Ruiz</option>
            <option value="2">Ing. Clever</option>
            <option value="3">Ing. Oscar Apaza</option>
            <option value="3">Ing. Jesús López</option>
          </select>
        </td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Ambiente</option>
            <option value="1">Amb. 2 2do P.</option>
            <option value="2">Amb. 5 3er P.</option>
            <option value="3">Amb. 3 2do P.</option>
            <option value="3">Amb. 6 3er P.</option>
          </select>
        </td>
      </tr>
    </tbody>
  );
};

/*
<h4>Asignación de Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Nro.</th>
            <th scope="col">Materia</th>
            <th scope="col">Siglas</th>
            <th scope="col">Grupo</th>
            <th scope="col">Docente</th>
            <th scope="col">Ambiente</th>
          </tr>
        </thead>
        {/*state.map((item) => {
          return <ContenidoMateriaDocenteH key={item.id} {...item} />;
        })*}
        <ContenidoMateriaDocenteH />
      </table>
      <button type="button" className="btn btn-dark">
        Guardar
      </button>



 <div className="form-group row">
          <label className="col-4 col-form">Semestre</label>
          <div className="col-6">
            <select
              id="semestre"
              className="form-select"
              value={valueSemestre}
              onChange={handleChangeOption}
            >
              {dataSemestre.length > 0 ? (
                dataSemestre.map((item) => {
                  return (
                    <>
                      <option key={item._id} value={item.semestre}>
                        {item.semestre}
                      </option>
                      ;
                    </>
                  );
                })
              ) : (
                <option value="sinSemestre">No existe semestres creados</option>
              )}
            </select>
          </div>
        </div> */
