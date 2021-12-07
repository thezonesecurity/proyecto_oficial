import App from "../../App";
import { Express, request, Request, Response } from "express";
import MateriaController from "./controllerM/MateriaController";
class RoutesMateria {
  private rootPath: string;
  private mainappM: App;
  private app: Express;
  private materiaController: MateriaController;

  constructor(rootPath: string, mainappM: App) {
    // materia
    this.rootPath = rootPath;
    this.mainappM = mainappM;
    this.app = this.mainappM.getApp();

    this.materiaController = new MateriaController(
      mainappM.getClientMongoose() // se hace la inyección
    );

    this.configureRoutesMateria();
  }
  private configureRoutesMateria() {
    // Creaciòn del empoint. Se enlaza a un controlador especìfico de una clase
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.materiaController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.materiaController.get(request, response);
      });
    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.materiaController.getId(request, response);
      });
    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.materiaController.update(request, response);
      });
    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.materiaController.delete(request, response);
      });
  }
}
export default RoutesMateria;
