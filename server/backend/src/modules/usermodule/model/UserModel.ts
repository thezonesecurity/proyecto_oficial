import { Mongoose, Schema, Document } from "mongoose";
import { IRoles } from "./RolesModel";

export interface IAvatar {
  url: string;
  path: string;
}
export interface IUser {
  nombre?: string;
  apellidos?: string;
  ci?: string;
  email?: string;
  direccion?: string;
  telefono?: string;
  carga_horaria?: string;
  password?: string;
  avatar?: Array<IAvatar>;
  roles?: Array<IRoles>;
  // mensaje?: string;
}
export interface User extends Document, IUser {
  createAt: Date;
  updataAt: Date;
}

const userSchema = new Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  ci: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => {
        return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
      },
      message: (props: any) => `${props.value} no es un correo valido`,
    },
  },
  roles: [{ type: Schema.Types.ObjectId, unique: true, ref: "roles" }],
  direccion: { type: String, required: true },
  telefono: { type: String, required: false },
  carga_horaria: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: Array, required: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
  //mensaje: { type: String, require: false },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<User>("user", userSchema);
};
