import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { createModel, IEstudiante } from "../model/IEstudianteModule";
import { IEstudianteRepository } from "../repositories/IEstudianteRepository";

class IEstudianteController {
  private iestudianteRepository: IEstudianteRepository;
  constructor(mongoose: Mongoose) {
    this.iestudianteRepository = new IEstudianteRepository(
      createModel(mongoose)
    );
  }
  //biene del metodo post
  public async create(request: Request, response: Response) {
    //body
    let {
      sigla1,
      sigla2,
      sigla3,
      sigla4,
      sigla5,
      sigla6,
      materia1,
      materia2,
      materia3,
      materia4,
      materia5,
      materia6,
      grupo1,
      grupo2,
      grupo3,
      grupo4,
      grupo5,
      grupo6,
      unoParcial,
      dosParcial,
      tresParcial,
      pormParcial,
      examenFinal,
      notaFinal,
      segundoTurno,
    } = request.body;
    const result = await this.iestudianteRepository.create({
      sigla1,
      sigla2,
      sigla3,
      sigla4,
      sigla5,
      sigla6,
      materia1,
      materia2,
      materia3,
      materia4,
      materia5,
      materia6,
      grupo1,
      grupo2,
      grupo3,
      grupo4,
      grupo5,
      grupo6,
      unoParcial,
      dosParcial,
      tresParcial,
      pormParcial,
      examenFinal,
      notaFinal,
      segundoTurno,
    });
    response.status(201).json({ severResponse: result });
  }
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const {
      sigla1,
      sigla2,
      sigla3,
      sigla4,
      sigla5,
      sigla6,
      materia1,
      materia2,
      materia3,
      materia4,
      materia5,
      materia6,
      grupo1,
      grupo2,
      grupo3,
      grupo4,
      grupo5,
      grupo6,
      unoParcial,
      dosParcial,
      tresParcial,
      pormParcial,
      examenFinal,
      notaFinal,
      segundoTurno,
    }: IEstudiante = request.body;
    const result = await this.iestudianteRepository.update(id, {
      sigla1,
      sigla2,
      sigla3,
      sigla4,
      sigla5,
      sigla6,
      materia1,
      materia2,
      materia3,
      materia4,
      materia5,
      materia6,
      grupo1,
      grupo2,
      grupo3,
      grupo4,
      grupo5,
      grupo6,
      unoParcial,
      dosParcial,
      tresParcial,
      pormParcial,
      examenFinal,
      notaFinal,
      segundoTurno,
    });
    response.status(201).json({ serverResponse: result });
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.iestudianteRepository.findOne(id);
    response.status(201).json({ severResponse: result });
  }

  public async get(request: Request, response: Response) {
    const result = await this.iestudianteRepository.find({});
    response.status(201).json({ severResponse: result });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.iestudianteRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
}
export default IEstudianteController;
