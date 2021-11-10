import { Mongoose, Schema, Document } from "mongoose";

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  createAt?: Date;
  updataAt?: Date;
}
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  createAt: Date;
  updataAt: Date;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
      },
      message: (props: any) => `${props.value} no es un correo valido`,
    },
  },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<User>("user", userSchema);
};
