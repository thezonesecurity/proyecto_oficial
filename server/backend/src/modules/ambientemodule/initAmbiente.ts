import App from "../../App";
import RoutesAmbiente from "./routesAmbiente";

class AmbienteModule {
  constructor(routePath: string, app: App) {
    console.log("loas ambiente modules");
    const routes: RoutesAmbiente = new RoutesAmbiente(routePath, app);
  }
}
export default AmbienteModule;
