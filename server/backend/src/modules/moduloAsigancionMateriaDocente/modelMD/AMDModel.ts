import { Mongoose, Schema } from "mongoose";

export interface IMateriaDocente {
  materia?: string;
  sigla?: string;
  grupo?: string;
  docente?: string;
  ci?: string;
  ambiente?: string;
}
export interface MateriaDocente extends Document, IMateriaDocente {
  createAt: Date;
  updateAt: Date;
}
export const AMDModelSchema = new Schema({
  materia: { type: String, required: true },
  sigla: { type: String, required: false },
  grupo: { type: String, required: true },
  docente: { type: String, required: true },
  ci: { type: String, required: true, unique: false },
  ambiente: { type: String, required: true },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModelAMD = (mongoose: Mongoose) => {
  //al poner <MateriaDocente> se envia como dato generico
  return mongoose.model<MateriaDocente>("materiaDocente", AMDModelSchema);
};
