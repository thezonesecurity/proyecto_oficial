//PRUEBAS DE INEGRACION
import mongoose from "mongoose";
import { createModel } from "../module/IDModel";
import { IDocenteRepository } from "../repositories/IDocenteRepository";
//import { createModel } from "../modelH/HorarioModel";
//import { HorarioRepository } from "../repositoriesH/HorarioRepository";

const newIDocente = {
  para: "test@gmail.com",
  de: "test1@gmail.com",
  asunto: "Corregir lo siguiente: (ambiente)",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Operation of IDocenteRepository Class create", () => {
  test("Should be create and IDocente", async () => {
    const idocenteRepo = new IDocenteRepository(createModel(mongoose));
    const expected = await idocenteRepo.create(newIDocente);
    expect(expected.para).toBe(newIDocente.para);
  });
  test("Should be get a list of idocente find", async () => {
    const idocenteRepo = new IDocenteRepository(createModel(mongoose));
    const expected: any = await idocenteRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Should be get only one idocente findOne", async () => {
    const idocenteRepo = new IDocenteRepository(createModel(mongoose));
    const expected = await idocenteRepo.create(newIDocente);
    const testData = await idocenteRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Should be update an idocente in their params para, de, asunto,", async () => {
    const idocenteRepo = new IDocenteRepository(createModel(mongoose));
    const updateHorario = await idocenteRepo.create(newIDocente);
    await idocenteRepo.update(updateHorario.id, {
      para: "admin@gmail.com",
      de: "user@gmail.com",
      asunto: "Corregir lo siguiente: (materia)",
    });
    const expected = await idocenteRepo.findOne(updateHorario.id);
    expect(expected.para).toBe("admin@gmail.com");
  });
  test("Should be delete idocente form collection idocente", async () => {
    const idocenteRepo = new IDocenteRepository(createModel(mongoose));
    const list: any = await idocenteRepo.find({});
    list.forEach(async (item: any) => {
      await idocenteRepo.delete(item.id);
    });
    const expected: any = await idocenteRepo.find({});
    expect(expected.length).toBe(0);
  });
});
