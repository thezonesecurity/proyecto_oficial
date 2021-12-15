import App from "../../App";
import RoutesEstudiante from "./routesEstudiante";
class EstudianteModule {
  constructor(routePath: string, app: App) {
    console.log("Load Interfaz Estudiante Modules");
    const routesEstudiante: RoutesEstudiante = new RoutesEstudiante(
      routePath,
      app
    );
  }
}
export default EstudianteModule;
