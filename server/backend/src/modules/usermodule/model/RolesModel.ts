import { Document, Mongoose, Schema } from "mongoose";

export interface IRoles {
  nombreRol?: string;
  metodoRol?: string;
  url?: string;
}
export interface Roles extends Document, IRoles {
  createAt: Date;
  updateAt: Date;
}
const RolesSchema = new Schema({
  nombreRol: { type: String, required: true },
  metodoRol: {
    type: String,
    required: true,
    enum: ["post", "get", "put", "delete"],
  },
  url: {
    type: String,
    required: true,
  },
  creatAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<Roles>("roles", RolesSchema);
};
