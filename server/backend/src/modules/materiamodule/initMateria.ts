import App from "../../App";
import RoutesMateria from "./routesMateria";
class MateriaModule {
  // va recuperar la informaciòn que tiene app y la ruta base
  constructor(routePath: string, app: App) {
    console.log("Load Materia Modules");
    const routesMateria: RoutesMateria = new RoutesMateria(routePath, app);
  }
}
export default MateriaModule;
