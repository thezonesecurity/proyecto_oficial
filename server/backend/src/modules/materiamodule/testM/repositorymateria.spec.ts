import mongoose from "mongoose";
import { createModelMateria } from "../modelM/MateriaModel";
import UserRepositoryMateria from "../repositoriesM/UserRepositoryMateria";
// PRUEBAS DE INTEGRACION

const newMateria = {
  materia: "Programacion",
  sigla: "SIS-131",
  carga_horaria: "45",
  semestre: "semestre 1",
};
// HOOKS

beforeAll(() => {
  // Conexión de Base de Datos
  mongoose.connect("mongodb://api_user:123@0.0.0.0:27017/api_seminario_test");
});

// cuando acabe la prueba
afterAll(() => {
  mongoose.disconnect();
});
// prueba
describe("Crud Operators of UserRepositoryMateria Class create", () => {
  // Prueba del create
  // test especifica que prueba se va ha hacer
  test("Should be create and Materia", async () => {
    const materiaRepo = new UserRepositoryMateria(createModelMateria(mongoose));
    const expected = await materiaRepo.create(newMateria);
    expect(expected.materia).toBe(newMateria.materia); // verifica la respuesta si es o no válida
  });
  // Prueba de lista (find)
  test("Should be get a list of materias find", async () => {
    // devuelve una lista de usuarios
    const materiaRepo = new UserRepositoryMateria(createModelMateria(mongoose));
    const expected: any = await materiaRepo.find({});
    //console.log(expected.length);
    expect(typeof expected).toBe("object");
    expect(expected.length).toBeGreaterThan(0);
  });
  // Prueba de findOne
  test("Should be get only one materia findOne", async () => {
    const materiaRepo = new UserRepositoryMateria(createModelMateria(mongoose));
    const expected = await materiaRepo.create(newMateria);
    const testDataM = await materiaRepo.findOne(expected.id);
    expect(expected.id).toBe(testDataM.id);
  });
  // Prueba del update
  test("Should be update an materia in their params materia, sigla, carga_horaria", async () => {
    const materiaRepo = new UserRepositoryMateria(createModelMateria(mongoose));
    const updateMateria = await materiaRepo.create(newMateria);
    await materiaRepo.update(updateMateria.id, {
      materia: "Update Materia",
      sigla: "SIS-124",
      carga_horaria: "50",
      semestre: "semestre 2",
    });
    const expected = await materiaRepo.findOne(updateMateria.id); // devuelve la materia modificada
    expect(expected.materia).toBe("Update Materia");
  });
  // Prueba de eliminar
  test("Should be delete materia form collection materias", async () => {
    const materiaRepo = new UserRepositoryMateria(createModelMateria(mongoose));
    const list: any = await materiaRepo.find({}); // Solicitar todos los datos desde find
    list.forEach(async (item: any) => {
      await materiaRepo.delete(item.id); // el delete irà borrando a cada item del id
    });
    const expected: any = await materiaRepo.find({});
    expect(expected.length).toBe(0);
  });
});
