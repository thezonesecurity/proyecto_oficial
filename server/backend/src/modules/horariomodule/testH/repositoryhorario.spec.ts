//PRUEBAS DE INEGRACION
import mongoose from "mongoose";
import { createModel } from "../modelH/HorarioModel";
import { HorarioRepository } from "../repositoriesH/HorarioRepository";

const newHorario = {
  hora: "08:45 - 09:30",
  lunes: "FIS-333",
  martes: "MAT-454",
  miercoles: "ING-123",
  jueves: "SIS-313",
  viernes: "OPT-001",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Operation of HorarioRepository Class create", () => {
  test("Should be create and Horario", async () => {
    const horarioRepo = new HorarioRepository(createModel(mongoose));
    const expected = await horarioRepo.create(newHorario);
    expect(expected.hora).toBe(newHorario.hora);
  });
  test("Should be get a list of horarios find", async () => {
    const horarioRepo = new HorarioRepository(createModel(mongoose));
    const expected: any = await horarioRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Should be get only one horario findOne", async () => {
    const horarioRepo = new HorarioRepository(createModel(mongoose));
    const expected = await horarioRepo.create(newHorario);
    const testData = await horarioRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Should be update an horario in their params hora, lunes,", async () => {
    const horarioRepo = new HorarioRepository(createModel(mongoose));
    const updateHorario = await horarioRepo.create(newHorario);
    await horarioRepo.update(updateHorario.id, {
      hora: "10:45 - 12:30",
      lunes: "FIS-753",
      martes: "DIS-454",
      miercoles: "ING-987",
      jueves: "ART-313",
      viernes: "OPT-111",
    });
    const expected = await horarioRepo.findOne(updateHorario.id);
    expect(expected.hora).toBe("10:45 - 12:30");
  });
  test("Should be delete horario form collection horarios", async () => {
    const horarioRepo = new HorarioRepository(createModel(mongoose));
    const list: any = await horarioRepo.find({});
    list.forEach(async (item: any) => {
      await horarioRepo.delete(item.id);
    });
    const expected: any = await horarioRepo.find({});
    expect(expected.length).toBe(0);
  });
});
