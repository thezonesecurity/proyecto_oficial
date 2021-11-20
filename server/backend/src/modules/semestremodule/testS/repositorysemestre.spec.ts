//PRUEBAS DE INTEGRACION DE SEMESTRE
import mongoose, { mongo } from "mongoose";
import { createModel } from "../modelS/SemestreModel";
import { SemestreRepository } from "../repositoriesS/SemestreRepository";

const newSemestre = {
  semestre: "3",
  año: "2021",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Operations of SemestreRepository Class", () => {
  test("Should be create and Semestre create", async () => {
    const semestreRepo = new SemestreRepository(createModel(mongoose));
    const expected = await semestreRepo.create(newSemestre);
    expect(expected.semestre).toBe(newSemestre.semestre);
  });
  test("shoud be get a list of semestre find", async () => {
    const semestreRepo = new SemestreRepository(createModel(mongoose));
    const expected: any = await semestreRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Shoul be get only one semestre findOne", async () => {
    const semestreRepo = new SemestreRepository(createModel(mongoose));
    const expected = await semestreRepo.create(newSemestre);
    const testData = await semestreRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Should be update an user in their params semestre,año", async () => {
    const semestreRepo = new SemestreRepository(createModel(mongoose));
    const updateSemestre = await semestreRepo.create(newSemestre);
    await semestreRepo.update(updateSemestre.id, {
      semestre: "Update Semestre",
      año: "2021",
    });
    const expected = await semestreRepo.findOne(updateSemestre.id);
    expect(expected.semestre).toBe("Update Semestre");
  });
  test("Should be delete semestre form collection semestres", async () => {
    const semestreRepo = new SemestreRepository(createModel(mongoose));
    const list: any = await semestreRepo.find({});
    list.forEach(async (item: any) => {
      await semestreRepo.delete(item.id);
    });
    const expected: any = await semestreRepo.find({});
    expect(expected.length).toBe(0);
  });
});
