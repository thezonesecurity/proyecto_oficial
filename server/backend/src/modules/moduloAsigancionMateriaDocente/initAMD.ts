import App from "../../App";
import RoutesAMD from "./routesAMD";
class AMDModule {
  constructor(routePath: string, app: App) {
    console.log("load asignacion materia docentes modules");
    const routes: RoutesAMD = new RoutesAMD(routePath, app);
  }
}
export default AMDModule;
