import App from "../../App";
import RoutesID from "./routesIDocente";

class IDocenteModule {
  constructor(routePath: string, app: App) {
    console.log("Load Interface Docente Modules");
    const routesID: RoutesID = new RoutesID(routePath, app);
  }
}
export default IDocenteModule;
