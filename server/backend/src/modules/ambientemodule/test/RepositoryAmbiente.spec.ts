//estas son pruebas de integracion  xk se sta usando un servicio mas complejo k es mongoose
//no son pruebas unitarias
import mongoose from "mongoose";
import { createModelAmbiente } from "../module/AmbienteModule";
import { AmbienteRepository } from "../repositories/interfaces/AmbienteRepository";
const newAmbiente = {
  ambiente: "test A-1",
  ubicacion: "est P-2",
};
//estos son 2 hooks importantes para realizar el test
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
//logic of test
describe("crud operators of AmbienteRepository", () => {
  //test para crear ambiente
  test("should be create an Ambiente -> method create", async () => {
    const ambienteRepo = new AmbienteRepository(createModelAmbiente(mongoose));
    const expected = await ambienteRepo.create(newAmbiente);
    expect(expected.ambiente).toBe(newAmbiente.ambiente);
  });
  //test para listar ambientes
  test("shoud be get a list of ambiente -> method find", async () => {
    const ambienteRepo = new AmbienteRepository(createModelAmbiente(mongoose));
    const expected: any = await ambienteRepo.find({});
    console.log(expected);
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  //test para ver un ambiente
  test("should be get only one ambiente -> method findOne", async () => {
    const ambienteRepo = new AmbienteRepository(createModelAmbiente(mongoose));
    const expected = await ambienteRepo.create(newAmbiente);
    const testData = await ambienteRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  //test para editar ambiente
  test("should be update an ambiente in their params ambiente y ubicacion -> method update", async () => {
    // const expected = "UA-1";
    const ambienteRepo = new AmbienteRepository(createModelAmbiente(mongoose));
    const updateAmbiente = await ambienteRepo.create(newAmbiente);
    await ambienteRepo.update(updateAmbiente.id, {
      ambiente: "UA-1",
      ubicacion: "UP-1",
    });
    const expected = await ambienteRepo.findOne(updateAmbiente.id);
    expect(expected.ambiente).toBe("UA-1");
  });

  //test para eliminar un ambiente
  test("show be delete ambiente form collection ambientes -> method delete", async () => {
    const ambienteRepo = new AmbienteRepository(createModelAmbiente(mongoose));
    const list: any = await ambienteRepo.find({});
    list.forEach(async (item: any) => {
      await ambienteRepo.delete(item.id);
    });
    const expected: any = await ambienteRepo.find({});
    expect(expected.length).toBe(0);
  });
});
