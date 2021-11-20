import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { SemestreUpdate } from "../dtoS/SemestreUpdate.dto";
import { createModel, ISemestre, Semestre } from "../modelS/SemestreModel";
import { SemestreRepository } from "../repositoriesS/SemestreRepository";

class SemestreController {
  private semestreRepository: SemestreRepository;
  constructor(mongoose: Mongoose) {
    this.semestreRepository = new SemestreRepository(createModel(mongoose));
  }
  //biene del metodo post
  public async create(request: Request, response: Response) {
    //body
    let { año, semestre } = request.body;
    const result = await this.semestreRepository.create({ año, semestre });
    response.status(201).json({ severResponse: result });
  }
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { semestre, año }: ISemestre = request.body;
    const result = await this.semestreRepository.update(id, { semestre, año });
    response.status(201).json({ serverResponse: result });
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.semestreRepository.findOne(id);
    response.status(201).json({ severResponse: result });
  }

  public async get(request: Request, response: Response) {
    const result = await this.semestreRepository.find({});
    response.status(201).json({ severResponse: result });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.semestreRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
}
export default SemestreController;
