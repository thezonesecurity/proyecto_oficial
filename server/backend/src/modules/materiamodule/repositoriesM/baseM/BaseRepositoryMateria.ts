import { Model } from "mongoose";
import { IReadMateria } from "../interfacesM/IReadMateria";
import { IWriteMateria } from "../interfacesM/IWriteMateria";

export abstract class BaseRepositoryMateria<T>
  implements IWriteMateria<T>, IReadMateria<T>
{
  private entity: Model<T>;
  constructor(model: Model<T>) {
    this.entity = model;
  }
  // Creación de métodos genèricos
  async create(item: T): Promise<T | any> {
    //await this.entity.syncIndexes(); //sincroniza los indices
    let newItem = new this.entity(item); // prepara al objeto para añadir a la Base de Datos
    return await newItem.save();
  }
  async update(id: string, item: T): Promise<T | any> {
    return await this.entity.findByIdAndUpdate(id, item); // en el item le decimos qué es lo que se va ha actualizar
  }
  async delete(id: string): Promise<Boolean> {
    return await this.entity.remove({ _id: id });
  }
  // encontrar un recurso
  async find(item: T): Promise<T[]> {
    return await this.entity.find(item);
  }
  async findOne(item: string): Promise<T | any> {
    return await this.entity.findById(item);
  }
}
