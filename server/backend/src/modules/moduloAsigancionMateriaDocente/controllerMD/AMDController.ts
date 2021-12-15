import { Request, Response } from "express";
import { Model, Mongoose } from "mongoose";
import { createModelAMD, IMateriaDocente } from "../modelMD/AMDModel";
import { AMDRepository } from "../repositoriesAMD/AMDReposirity";
class AMDController {
  private amdRepository: AMDRepository;
  constructor(mongoose: Mongoose) {
    // aquise inyecta la dependencia "createModelAMD(mongoose)"
    this.amdRepository = new AMDRepository(createModelAMD(mongoose));
  }
  //method post
  public async create(request: Request, response: Response) {
    //se envia datos usando el body(enviando solo cadenas)
    let { materia, sigla, grupo, docente, ci, ambiente } = request.body;
    //al momento d hacer el metodo create -> ingresa a AMDRepository a su metodo create
    //luego lo reenvia al mismo AMDController
    const result = await this.amdRepository.create({
      materia,
      sigla,
      grupo,
      docente,
      ci,
      ambiente,
    });
    response.status(201).json({ serverResponse: result });
    //y se crea en la BD
  }
  //method get
  public async getList(request: Request, response: Response) {
    const result = await this.amdRepository.find({});
    response.status(201).json({ serverResponse: result });
  }
  //method getId
  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.amdRepository.findOne(id);
    response.status(201).json({ serverResponse: result });
  }
  //method update
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { materia, sigla, grupo, docente, ci, ambiente }: IMateriaDocente =
      request.body;
    const result = await this.amdRepository.update(id, {
      materia,
      sigla,
      grupo,
      docente,
      ci,
      ambiente,
    });
    response.status(201).json({ serverResponse: result });
  }
  //method delete
  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.amdRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
}
export default AMDController;
