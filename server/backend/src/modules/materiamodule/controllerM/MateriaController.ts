import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { MateriaUpdate } from "../dto/MateriaUpdate.dto";
import { createModelMateria, IUserMat, Materia } from "../modelM/MateriaModel";
import UserRepositoryMateria from "../repositoriesM/UserRepositoryMateria";

class MateriaController {
  private userRepositoryMateria: UserRepositoryMateria;
  constructor(mongoose: Mongoose) {
    this.userRepositoryMateria = new UserRepositoryMateria(
      createModelMateria(mongoose)
    ); // UserRepository pide el modelo
  }
  // mètodos
  // método POST. Insertar datos
  public async create(request: Request, response: Response) {
    let { materia, sigla, carga_horaria, semestre } = request.body;
    //let { materia, sigla, semestre, carga_horaria } = request.body;
    const result = await this.userRepositoryMateria.create({
      materia,
      sigla,
      semestre,
      carga_horaria,
    });
    response.status(201).json({ serverResponse: result });
  }
  // Actualizar datos
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { materia, sigla, carga_horaria, semestre }: IUserMat = request.body;
    const result = await this.userRepositoryMateria.update(id, {
      materia,
      sigla,
      carga_horaria,
      semestre,
    }); // en result se va guardar los resultados
    response.status(201).json({ serverResponse: result }); // respondemos con un mensaje, y el resultado de nuestra petición
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.userRepositoryMateria.findOne(id);
    response.status(201).json({ serverResponse: result });
  }

  public async get(request: Request, response: Response) {
    const result = await this.userRepositoryMateria.find({});
    response.status(201).json({ serverResponse: result });
  }

  // public get(request: Request, response: Response) {}
  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.userRepositoryMateria.delete(id);
    response.status(200).json({ serverResponse: result });
  }

  public login(request: Request, response: Response) {}
  public singOut(request: Request, response: Response) {}
}
export default MateriaController;
