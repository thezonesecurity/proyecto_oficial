//estas son pruebas de integracion xk se usa mongoose y no son pruebas unitarias
import mongoose from "mongoose";
import { createModelAMD } from "../modelMD/AMDModel";
import { AMDRepository } from "../repositoriesAMD/AMDReposirity";

const newAMD = {
  materia: "biologia",
  sigla: "BIO-125",
  grupo: "1",
  docente: "diana manriquez",
  ambiente: "P-3 A-4",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});

describe("CRUD Operators of AMDRepository class", () => {
  test("should be create and AMD -> method create AMD", async () => {
    const amdRepo = new AMDRepository(createModelAMD(mongoose));
    const expected = await amdRepo.create(newAMD);
    expect(expected.materia).toBe(newAMD.materia);
  });
  test("should be list of AMD -> method get AMD", async () => {
    const amdRepo = new AMDRepository(createModelAMD(mongoose));
    const expected = await amdRepo.find({});
    console.log(expected);
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("should be get only one AMD - > method findOne", async () => {
    const amdRepo = new AMDRepository(createModelAMD(mongoose));
    const expected = await amdRepo.create(newAMD);
    const testData = await amdRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("should be update an AMD in all params - > method put", async () => {
    const amdRepo = new AMDRepository(createModelAMD(mongoose));
    const updateAMD = await amdRepo.create(newAMD);
    await amdRepo.update(updateAMD.id, {
      materia: "biologia 2",
      sigla: "BIO-225",
      grupo: "1",
      docente: "diana alice manriquez",
      ci: "19892748a",
      ambiente: "P-22 A-22",
    });
    const expected = await amdRepo.findOne(updateAMD.id);
    expect(expected.materia).toBe("biologia 2");
  });
  test("should be delete form collecction users -> method delete", async () => {
    const amdRepo = new AMDRepository(createModelAMD(mongoose));
    const list: any = await amdRepo.find({});
    list.forEach(async (item: any) => {
      await amdRepo.delete(item.id);
    });
    const expected: any = await amdRepo.find({});
    expect(expected.length).toBe(0);
  });
});
//.1.26.0
