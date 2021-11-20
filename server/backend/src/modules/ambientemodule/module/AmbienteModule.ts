import { Mongoose, Schema, Document } from "mongoose";

export interface IAmbiente {
  //num?: number;
  ambiente?: string;
  ubicacion?: string;
}
export interface Ambiente extends Document, IAmbiente {
  createAt: Date;
  updateAt: Date;
}
export const AmbienteSchema = new Schema({
  /*num: {
    type: Number,
    required: true,
  },*/
  ambiente: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => {
        return /[\A\-\1-9]/.test(v);
      },
      message: (props: any) => `${props.value} no es un ambiente valido`,
    },
  },
  ubicacion: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /[\P\-\1-9]/.test(v);
      },
      message: (props: any) => `${props.value} no es una ubicacion valida`,
    },
  },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});

export const createModelAmbiente = (mongoose: Mongoose) => {
  return mongoose.model<Ambiente>("ambiente", AmbienteSchema);
};
