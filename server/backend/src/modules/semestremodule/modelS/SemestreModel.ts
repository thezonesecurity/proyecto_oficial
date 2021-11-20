import { Document, Mongoose, Schema } from "mongoose";

export interface ISemestre {
  // num?: string;
  año?: string;
  semestre?: string;
}
export interface Semestre extends Document, ISemestre {
  createSem: Date;
  updateSem: Date;
}

const semestreSchema = new Schema({
  //  num: { type: String },
  año: { type: String, required: true },
  semestre: { type: String, required: true },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<Semestre>("semestre", semestreSchema);
};
