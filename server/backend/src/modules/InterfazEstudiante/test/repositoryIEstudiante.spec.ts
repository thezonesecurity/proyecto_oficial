//PRUEBAS DE INTEGRACION DE IESTUDIANTE
import mongoose, { mongo } from "mongoose";
import { createModel } from "../model/IEstudianteModule";
import { IEstudianteRepository } from "../repositories/IEstudianteRepository";

const newIEstudiante = {
  sigla1: "SIS-541",
  sigla2: "SIS-523",
  sigla3: "SIS-523",
  sigla4: "SIS-523",
  sigla5: "SIS-523",
  sigla6: "SIS-523",
  materia1: "DISEÑO1",
  materia2: "DISEÑO1",
  materia3: "DISEÑO1",
  materia4: "DISEÑO1",
  materia5: "DISEÑO1",
  materia6: "DISEÑO1",
  grupo1: "G-5",
  grupo2: "G-5",
  grupo3: "G-5",
  grupo4: "G-5",
  grupo5: "G-5",
  grupo6: "G-5",
  unoParcial: "0",
  dosParcial: "0",
  tresParcial: "0",
  pormParcial: "0",
  examenFinal: "0",
  notaFinal: "0",
  segundoTurno: "0",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Operations of IEstudianteRepository Class", () => {
  test("Should be create and IEstudiante create", async () => {
    const iestudianteRepo = new IEstudianteRepository(createModel(mongoose));
    const expected = await iestudianteRepo.create(newIEstudiante);
    expect(expected.sigla1).toBe(newIEstudiante.sigla1);
  });
  test("shoud be get a list of IEstdiante find", async () => {
    const iestudianteRepo = new IEstudianteRepository(createModel(mongoose));
    const expected: any = await iestudianteRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Shoul be get only one IEstudiante findOne", async () => {
    const iestudianteRepo = new IEstudianteRepository(createModel(mongoose));
    const expected = await iestudianteRepo.create(newIEstudiante);
    const testData = await iestudianteRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Should be update an user in their params IEstdiante,año", async () => {
    const iestudianteRepo = new IEstudianteRepository(createModel(mongoose));
    const updateIEstudiante = await iestudianteRepo.create(newIEstudiante);
    await iestudianteRepo.update(updateIEstudiante.id, {
      sigla1: "SIS-215",
      sigla2: "SIS-215",
      sigla3: "SIS-215",
      sigla4: "SIS-523",
      sigla5: "SIS-215",
      sigla6: "SIS-523",
      materia1: "DISEÑO1",
      materia2: "DISEÑO1",
      materia3: "DISEÑO1",
      materia4: "DISEÑO1",
      materia5: "DISEÑO1",
      materia6: "DISEÑO1",
      grupo1: "G-6",
      grupo2: "G-5",
      grupo3: "G-5",
      grupo4: "G-5",
      grupo5: "G-5",
      grupo6: "G-5",
      unoParcial: "0",
      dosParcial: "0",
      tresParcial: "0",
      pormParcial: "0",
      examenFinal: "0",
      notaFinal: "0",
      segundoTurno: "0",
    });
    const expected = await iestudianteRepo.findOne(updateIEstudiante.id);
    expect(expected.sigla).toBe("SIS-215");
  });
  test("Should be delete IEstudiante form collection iestudiante", async () => {
    const iestudianteRepo = new IEstudianteRepository(createModel(mongoose));
    const list: any = await iestudianteRepo.find({});
    list.forEach(async (item: any) => {
      await iestudianteRepo.delete(item.id);
    });
    const expected: any = await iestudianteRepo.find({});
    expect(expected.length).toBe(0);
  });
});
