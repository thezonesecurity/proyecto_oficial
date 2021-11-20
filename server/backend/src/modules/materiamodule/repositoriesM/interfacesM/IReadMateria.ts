export interface IReadMateria<T> {
  find(item: T): Promise<T[]>; // Promise<T[]> devuelve un conjunto de datos
  findOne(item: string): Promise<T | any>;
}
