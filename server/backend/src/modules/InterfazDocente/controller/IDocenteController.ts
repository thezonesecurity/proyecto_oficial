import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { createModel, IDocente } from "../module/IDModel";
import { IDocenteRepository } from "../repositories/IDocenteRepository";

class IDocenteController {
  private idocenteRepository: IDocenteRepository;
  constructor(mongoose: Mongoose) {
    this.idocenteRepository = new IDocenteRepository(createModel(mongoose));
  }
  //method POST
  public async create(request: Request, response: Response) {
    //body
    let { para, de, asunto } = request.body;
    const result = await this.idocenteRepository.create({
      para,
      de,
      asunto,
    });
    response.status(201).json({ serverResponse: result });
  }
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { para, de, asunto }: IDocente = request.body;
    const result = await this.idocenteRepository.update(id, {
      para,
      de,
      asunto,
    });
    response.status(201).json({ serverResponse: result });
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.idocenteRepository.findOne(id);
    response.status(201).json({ serverResponse: result });
  }

  public async get(request: Request, response: Response) {
    const result = await this.idocenteRepository.find({});
    response.status(201).json({ serverResponse: result });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.idocenteRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
}
export default IDocenteController;
