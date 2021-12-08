import App from "../../App";
import { Express, Request, Response } from "express";
import IDocenteController from "./controller/IDocenteController";
class RoutesID {
  private rootPath: string;
  private mainApp: App;
  private app: Express;
  private idocenteController: IDocenteController;
  constructor(rootPath: string, mainApp: App) {
    this.rootPath = rootPath;
    this.mainApp = mainApp;
    this.app = this.mainApp.getApp();

    this.idocenteController = new IDocenteController(
      mainApp.getClientMongoose()
    );

    this.configureRoutes();
  }
  private configureRoutes() {
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.idocenteController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.idocenteController.get(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.idocenteController.getId(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.idocenteController.update(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.idocenteController.delete(request, response);
      });
  }
}
export default RoutesID;
