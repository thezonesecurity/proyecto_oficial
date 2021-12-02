import { Model } from "mongoose";
import { IReadAmbiente } from "../interfaces/IReadAmbiente";
import { IWriteAmbiente } from "../interfaces/IWriteAmbiente";

export abstract class BaseRepository<T>
  implements IWriteAmbiente<T>, IReadAmbiente<T>
{
  private entity: Model<T>;
  constructor(model: Model<T>) {
    this.entity = model;
  }
  //estos crud son metodos genericos
  async create(item: T): Promise<T | any> {
    //await this.entity.syncIndexes(); //sincroniza los indices
    let newItem = new this.entity(item);
    return await newItem.save();
  }
  async update(id: string, item: T): Promise<T | any> {
    return await this.entity.findByIdAndUpdate(id, item);
  }
  async delete(id: string): Promise<Boolean> {
    return await this.entity.remove({ _id: id });
  }
  async find(item: T): Promise<T[]> {
    return await this.entity.find(item);
  }
  async findOne(item: string): Promise<T | any> {
    return await this.entity.findById(item);
    // throw new Error("Method not implemented.");
  }
}
