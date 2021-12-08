import { Model } from "mongoose";
import { IReadID } from "../interfacesID/IReadID";
import { IWriteID } from "../interfacesID/IWriteID";

export abstract class BaseRepositoryID<T> implements IWriteID<T>, IReadID<T> {
  private entity: Model<T>;
  constructor(model: Model<T>) {
    this.entity = model;
  }

  async create(item: T): Promise<T | any> {
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
  }
}
