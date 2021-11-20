export interface IWriteMateria<T> {
  // Definimos los mètodos
  create(item: T): Promise<T | any>; // interfaz genèrica, que va devolver una promesa de tipo genèrica
  update(id: string, item: T): Promise<T | any>; // "any" puede devolver el objeto que se ha construido pero al momento de insertar posiblemente cambie su forma, acepta cualquier tipo de dato
  delete(item: string): Promise<Boolean>; // Boolean: avisa que se a borrado o no
}
