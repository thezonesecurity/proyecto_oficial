import App from "../../App";
import RoutesH from "./routesH";

class HorarioModule {
  constructor(routePath: string, app: App) {
    console.log("Load Horario Modules");
    const routesH: RoutesH = new RoutesH(routePath, app);
  }
}
export default HorarioModule;
