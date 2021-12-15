import App from "../../App";
import { Express, Request, Response } from "express";
import IEstudianteController from "./controller/estudianteController";

class RoutesEstudiante {
  private rootPath: String;
  private mainAppS: App;
  private app: Express;
  private estudianteController: IEstudianteController;
  constructor(rootPath: string, mainAppS: App) {
    this.rootPath = rootPath;
    this.mainAppS = mainAppS;
    this.app = this.mainAppS.getApp();

    this.estudianteController = new IEstudianteController(
      mainAppS.getClientMongoose()
    );

    this.configureRoutesS();
  }
  private configureRoutesS() {
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.estudianteController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.estudianteController.get(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.estudianteController.getId(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.estudianteController.update(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.estudianteController.delete(request, response);
      });
  }
}
export default RoutesEstudiante;
