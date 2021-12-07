import { Express, Request, Response } from "express";
import App from "../../App";
import AMDController from "./controllerMD/AMDController";

class RoutesAMD {
  private rootPath: String;
  private mainAppAMD: App;
  private app: Express;
  private amdController: AMDController;
  constructor(rootPath: string, mainAppAMD: App) {
    this.rootPath = rootPath;
    this.mainAppAMD = mainAppAMD;
    this.app = this.mainAppAMD.getApp();
    //aqui "mainAppAMD.getClientMongoose()" empiesa la inyeccion de dependencias
    this.amdController = new AMDController(mainAppAMD.getClientMongoose());
    this.configureRoutesAMD();
  }
  private configureRoutesAMD() {
    //route para metodo crear AMD
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.amdController.create(request, response);
      });
    //route para metodo getlist
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.amdController.getList(request, response);
      });
    //route para metodo getId
    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.amdController.getId(request, response);
      });
    //route para metodo update
    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.amdController.update(request, response);
      });
    //route para metodo delete
    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.amdController.delete(request, response);
      });
  }
}
export default RoutesAMD;
