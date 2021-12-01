//PRUEBAS DE INTEGRACION DE LAS INTERFACES REALIZADAS
import mongoose from "mongoose";
import { createModel } from "../model/UserModel";
import UserRepository from "../repositories/UserRepository";

const newUser = {
  nombre: "Olga",
  apellidos: "Mamani Alejo",
  ci: "8545125",
  email: "olga@gmail.com",
  direccion: "caller Oruro",
  telefono: "7845126",
  carga_horaria: "45",
  password: "123456",
};
beforeAll(() => {
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
  mongoose.disconnect();
});
describe("Crud Oporations of UserRespository Class create", () => {
  test("Should be create and User", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected = await userRepo.create(newUser);
    expect(expected.nombre).toBe(newUser.nombre);
  });
  test("Shoul be get a list of users find", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected: any = await userRepo.find({});
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  test("Shoul be get only one users findOne", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const expected = await userRepo.create(newUser);
    const testData = await userRepo.findOne(expected.id);
    expect(expected.id).toBe(testData.id);
  });
  test("Shoul be update an users in their params nombre, apellidos, ci, email, direccion, telefono, carga_horaria", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const updateUser = await userRepo.create(newUser);
    await userRepo.update(updateUser.id, {
      nombre: "Update User",
      apellidos: "Update Last Name",
      ci: "8545456",
      email: "update@gmail.com",
      direccion: "caller frias",
      telefono: "7845987",
      carga_horaria: "47",
      rolUser: "Docente",
    });
    const expected = await userRepo.findOne(updateUser.id);
    expect(expected.nombre).toBe("Update User");
  });
  test("Shoul be delete user form collection users", async () => {
    const userRepo = new UserRepository(createModel(mongoose));
    const list: any = await userRepo.find({});
    list.forEach(async (item: any) => {
      await userRepo.delete(item.id);
    });
    const expected: any = await userRepo.find({});
    expect(expected.length).toBe(0);
  });
});
