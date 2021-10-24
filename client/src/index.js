import React from "react";
import ReactDOM from "react-dom";
import { MainAmbiente } from "./admin/ambientes/MainAmbiente";
import { MainDocente } from "./admin/docente/MainDocente";
import { MainHorario } from "./admin/horario/MainHorario";
import { MainMateria } from "./admin/materia/MainMateria";
import { MainReportes } from "./admin/reportes/MainReportes";
import { MainSemestre } from "./admin/semestre/MainSemestre";
import { MainInterfaceDocente } from "./interfaceDocente/MainInterfaceDocente";
import { MainInterfaceEstudiante } from "./interfaceEstudiante/MainInterfaceEstudiante";

ReactDOM.render(<MainInterfaceEstudiante />, document.getElementById("root"));
