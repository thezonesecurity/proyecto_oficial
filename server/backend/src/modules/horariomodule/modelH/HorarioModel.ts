import { Document, Mongoose, Schema } from "mongoose";

export interface IHorario {
  hora?: string;
  lunes?: string;
  martes?: string;
  miercoles?: string;
  jueves?: string;
  viernes?: string;
}
export interface Horario extends Document, IHorario {
  createAt: Date;
  updateAt: Date;
}
const horarioSchema = new Schema({
  hora: { type: String, required: true },
  lunes: { type: String, required: false },
  martes: { type: String, required: false },
  miercoles: { type: String, required: false },
  jueves: { type: String, required: false },
  viernes: { type: String, required: false },
  //semestre:{type: String, required: false},
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<Horario>("horario", horarioSchema);
};
