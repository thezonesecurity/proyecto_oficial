import { IUserMat } from "../modelM/MateriaModel";
import { BaseRepositoryMateria } from "./baseM/BaseRepositoryMateria";

export class UserRepositoryMateria extends BaseRepositoryMateria<IUserMat> {
  public login() {}
  public singout() {}
}
export default UserRepositoryMateria;
