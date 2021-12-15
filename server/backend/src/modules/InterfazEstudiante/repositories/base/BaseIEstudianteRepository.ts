import { Model } from "mongoose";
import { IERead } from "../interfaces/IERead";
import { IEWrite } from "../interfaces/IEWrite";

export abstract class BaseIEstudianteRepository<T>
  implements IEWrite<T>, IERead<T>
{
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
