import { Document, Mongoose, Schema } from "mongoose";

export interface IDocente {
  para?: string;
  de?: string;
  asunto?: string;
}
export interface InterfazDocente extends Document, IDocente {
  createAt: Date;
  updateAt: Date;
}
const IDocenteSchema = new Schema({
  para: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
      },
      message: (props: any) => `${props.value} no es un correo valido`,
    },
  },
  de: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
      },
      message: (props: any) => `${props.value} no es un correo valido`,
    },
  },
  asunto: { type: String, required: true },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<InterfazDocente>("idocente", IDocenteSchema);
};
