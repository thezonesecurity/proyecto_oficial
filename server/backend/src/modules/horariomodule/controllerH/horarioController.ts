import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { HorarioUpdate } from "../dtoH/HorarioUpdate.dto";
import { createModel, Horario, IHorario } from "../modelH/HorarioModel";
import { HorarioRepository } from "../repositoriesH/HorarioRepository";

class HorarioController {
  private horarioRepository: HorarioRepository;
  constructor(mongoose: Mongoose) {
    this.horarioRepository = new HorarioRepository(createModel(mongoose));
  }
  //method POST
  public async create(request: Request, response: Response) {
    //body
    let { hora, lunes, martes, miercoles, jueves, viernes } = request.body;
    const result = await this.horarioRepository.create({
      hora,
      lunes,
      martes,
      miercoles,
      jueves,
      viernes,
    });
    response.status(201).json({ serverResponse: result });
  }
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { hora, lunes, martes, miercoles, jueves, viernes }: IHorario =
      request.body;
    const result = await this.horarioRepository.update(id, {
      hora,
      lunes,
      martes,
      miercoles,
      jueves,
      viernes,
    });
    response.status(201).json({ serverResponse: result });
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.horarioRepository.findOne(id);
    response.status(201).json({ serverResponse: result });
  }

  public async get(request: Request, response: Response) {
    const result = await this.horarioRepository.find({});
    response.status(201).json({ serverResponse: result });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.horarioRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
}
export default HorarioController;
