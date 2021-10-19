import React from "react";
import ReactDOM from "react-dom";
import { MainAmbiente } from "./ambientes/MainAmbiente";
import { MainDocente } from "./docente/MainDocente";
import { MainHorario } from "./horario/MainHorario";
import { MainMateria } from "./materia/MainMateria";
import { MainSemestre } from "./semestre/MainSemestre";

ReactDOM.render(<MainSemestre />, document.getElementById("root"));
