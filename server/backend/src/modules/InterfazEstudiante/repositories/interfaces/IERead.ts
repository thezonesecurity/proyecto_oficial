export interface IERead<T> {
  find(item: T): Promise<T[]>;
  findOne(item: string): Promise<T | any>;
}
