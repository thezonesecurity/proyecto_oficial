import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { AmbienteUpdate } from "../dto/AmbienteUpdate.dto";
import { createModelAmbiente, IAmbiente } from "../module/AmbienteModule";
import { AmbienteRepository } from "../repositories/interfaces/AmbienteRepository";

class AmbienteController {
  // private ambienteModel: Model<Ambiente>;
  private ambienteRepository: AmbienteRepository;
  constructor(mongoose: Mongoose) {
    //this.ambienteModel = createModelAmbiente(mongoose)
    //aqui se hace la inyeccion de la dependencia del recurso
    this.ambienteRepository = new AmbienteRepository(
      createModelAmbiente(mongoose)
    );
  }
  //method post
  public async create(request: Request, response: Response) {
    //se usa body con el metodo post
    let { ambiente, ubicacion } = request.body;
    const result = await this.ambienteRepository.create({
      // num,
      ambiente,
      ubicacion,
    });
    response.status(201).json({ serverResponse: result });
  }
  //method put -> update
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { ambiente, ubicacion }: IAmbiente = request.body;
    const result = await this.ambienteRepository.update(id, {
      ambiente,
      ubicacion,
    });
    response.status(201).json({ serverResponse: result });
  }
  //method get list ambiente
  public async get(request: Request, response: Response) {
    const result = await this.ambienteRepository.find({});
    response.status(201).json({ serverResponse: result });
  }
  //method get ambiente
  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.ambienteRepository.findOne(id);
    response.status(201).json({ serverResponse: result });
  }
  //method delete
  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.ambienteRepository.delete(id);
    response.status(201).json({ serverResponse: result });
  }
}
export default AmbienteController;
