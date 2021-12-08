export interface IWriteID<T> {
  create(item: T): Promise<T | any>;
  update(id: string, item: T): Promise<T | any>;
  delete(item: string): Promise<Boolean>;
}
