import App from "../../App";
import { Express, Request, Response } from "express";
import HorarioController from "./controllerH/horarioController";
class RoutesH {
  private rootPath: string;
  private mainApp: App;
  private app: Express;
  private horarioController: HorarioController;
  constructor(rootPath: string, mainApp: App) {
    this.rootPath = rootPath;
    this.mainApp = mainApp;
    this.app = this.mainApp.getApp();

    this.horarioController = new HorarioController(mainApp.getClientMongoose());

    this.configureRoutes();
  }
  private configureRoutes() {
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.horarioController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.horarioController.get(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.horarioController.getId(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.horarioController.update(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.horarioController.delete(request, response);
      });
  }
}
export default RoutesH;
