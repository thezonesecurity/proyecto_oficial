import { Document, Mongoose, Schema } from "mongoose";

export interface IEstudiante {
  // num?: string;
  sigla1?: string;
  sigla2?: string;
  sigla3?: string;
  sigla4?: string;
  sigla5?: string;
  sigla6?: string;
  materia1?: string;
  materia2?: string;
  materia3?: string;
  materia4?: string;
  materia5?: string;
  materia6?: string;
  grupo1?: string;
  grupo2?: string;
  grupo3?: string;
  grupo4?: string;
  grupo5?: string;
  grupo6?: string;
  unoParcial?: string;
  dosParcial?: string;
  tresParcial?: string;
  pormParcial?: string;
  examenFinal?: string;
  notaFinal?: string;
  segundoTurno?: string;
}
export interface Estudiante extends Document, IEstudiante {
  createSem: Date;
  updateSem: Date;
}

const IEstudianteSchema = new Schema({
  //  num: { type: String },
  sigla1: { type: String, required: false },
  sigla2: { type: String, required: false },
  sigla3: { type: String, required: false },
  sigla4: { type: String, required: false },
  sigla5: { type: String, required: false },
  sigla6: { type: String, required: false },
  materia1: { type: String, required: false },
  materia2: { type: String, required: false },
  materia3: { type: String, required: false },
  materia4: { type: String, required: false },
  materia5: { type: String, required: false },
  materia6: { type: String, required: false },
  grupo1: { type: String, required: false },
  grupo2: { type: String, required: false },
  grupo3: { type: String, required: false },
  grupo4: { type: String, required: false },
  grupo5: { type: String, required: false },
  grupo6: { type: String, required: false },
  unoParcial: { type: String, required: false },
  dosParcial: { type: String, required: false },
  tresParcial: { type: String, required: false },
  pormParcial: { type: String, required: false },
  examenFinal: { type: String, required: false },
  notaFinal: { type: String, required: false },
  segundoTurno: { type: String, required: false },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<Estudiante>("estudiante", IEstudianteSchema);
};
