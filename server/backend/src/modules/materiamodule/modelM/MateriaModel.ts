import { Mongoose, Schema, Document } from "mongoose";

// creación de los objetos
export interface IUserMat {
  // num?: string;
  materia?: string;
  sigla?: string;
  //semestre?: string;
  carga_horaria?: string;
}

export interface Materia extends Document {
  // num: string;
  materia: string;
  sigla: string;
  //semestre: string;
  carga_horaria: string;
}

const materiaSchema = new Schema({
  // Estructura de datos que necesitamos para materia
  //num: {type: String, required: true},
  materia: { type: String, required: true },
  sigla: { type: String, required: true },
  //semestre: { type: String, required: true },
  carga_horaria: { type: String, required: true },
});

export const createModelMateria = (mongoose: Mongoose) => {
  // este modelo me va poder devolver un modelo de tipo Materia, devolvar los datos de materia
  return mongoose.model<Materia>("materia", materiaSchema);
};
