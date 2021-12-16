import { Model } from "mongoose";
import { IReadAMD } from "../interfaces/IReadAMD";
import { IWriteAMD } from "../interfaces/IWriteAMD";

export abstract class BaseReposirotyAMD<T>
  implements IWriteAMD<T>, IReadAMD<T>
{
  private entity: Model<T>;
  constructor(model: Model<T>) {
    this.entity = model;
  }
  async create(item: T): Promise<T | any> {
    //throw new Error("Method not implemented.");
    await this.entity.syncIndexes(); //sincroniza los indices
    let newItem = new this.entity(item);
    return await newItem.save();
  }
  async update(id: string, item: T): Promise<T | any> {
    //throw new Error("Method not implemented.");
    return await this.entity.findByIdAndUpdate(id, item);
  }
  async delete(id: string): Promise<Boolean> {
    //throw new Error("Method not implemented.");
    return await this.entity.remove({ _id: id });
  }
  async find(item: T): Promise<T[]> {
    //throw new Error("Method not implemented.");
    return await this.entity.find(item);
  }
  async findOne(item: string): Promise<T | any> {
    //throw new Error("Method not implemented.");
    return await this.entity.findById(item);
  }
}
//1:23_30
