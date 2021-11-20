import App from "../../App";
import RoutesS from "./routesS";
class SemestreModule {
  constructor(routePath: string, app: App) {
    console.log("Load Semestre Modules");
    const routesS: RoutesS = new RoutesS(routePath, app);
  }
}
export default SemestreModule;
