export const endpointsM = {
  registerMateria: {
    url: "http://localhost:8000/api1.0/materia/",
    method: "POST",
  },
  listMateria: { url: "http://localhost:8000/api1.0/materia/", method: "GET" },
  deleteMateria: {
    url: "http://localhost:8000/api1.0/materia/",
    method: "DELETE",
  },
  editarMateria: {
    url: "http://localhost:8000/api1.0/materia/",
    method: "PUT",
  },
  verMateria: { url: "http://localhost:8000/api1.0/materia/", method: "GET" },

  //peticion de lista de semestres
  listMatSemestre: {
    url: "http://localhost:8000/api1.0/semestre/",
    method: "GET",
  },
};
