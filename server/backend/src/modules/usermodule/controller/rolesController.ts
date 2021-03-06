import { Request, Response } from "express";
import App from "../../../App";
import { createModel as createRolModel, IRoles } from "../model/RolesModel";
import { createModel as createUserModel } from "../model/UserModel";
import RolesRepository from "../repositories/RolesRepository";

class RolesController {
  private app: App;
  private rolesRepository: RolesRepository<IRoles>;
  constructor(app: App) {
    this.app = app;
    this.rolesRepository = new RolesRepository(
      createRolModel(app.getClientMongoose()),
      createUserModel(app.getClientMongoose())
    );
  }
  //create roles
  public async create(request: Request, response: Response) {
    const { nombreRol, metodoRol, url } = request.body;
    const responseData = await this.rolesRepository.create({
      nombreRol,
      metodoRol,
      url,
    });
    response.status(201).json({ ServerResponse: responseData });
  }
  public async get(request: Request, response: Response) {
    // sirve la lista de los roles
    const list: IRoles[] = await this.rolesRepository.find({});
    response.status(200).json({ ServerResponse: list });
  }
  public async getId(request: Request, response: Response) {
    // ver un solo rol por id
    const { id } = request.params;
    const rol = await this.rolesRepository.findOne(id);
    response.status(200).json({ serverResponse: rol });
  }
  public async update(request: Request, response: Response) {
    //es para editar o actualizar los datos de roles
    const { id } = request.params;
    const { nombreRol, metodoRol, url } = request.body;
    const update = await this.rolesRepository.update(id, {
      nombreRol,
      metodoRol,
      url,
    });
    response.status(200).json({ serverResponse: update });
  }
  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteData = await this.rolesRepository.delete(id);
    response.status(200).json({ serverResponse: deleteData });
  }
  public async addUserRol(request: Request, response: Response) {
    //esto es para la asignacion de roles
    const { idUs, idRol } = request.params;
    const result = await this.rolesRepository.addRolUser(idUs, idRol);
    response.status(201).json({ serverResponse: result });
  }
}
export default RolesController;
