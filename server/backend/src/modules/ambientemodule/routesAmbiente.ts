import App from "../../App";
import { Express, Request, Response } from "express";
import AmbienteController from "./controller/AmbienteController";
class RoutesAmbiente {
  private rootPath: string;
  //rootPath => ambiente
  private mainAppAmb: App;
  private app: Express;
  private ambienteController: AmbienteController;
  constructor(rootPath: string, mainAppAmb: App) {
    (this.rootPath = rootPath),
      (this.mainAppAmb = mainAppAmb),
      (this.app = this.mainAppAmb.getApp());
    //aqui se realiza la inyeccion de dependencias, realizando a conexion de rutas y controlador
    this.ambienteController = new AmbienteController(
      mainAppAmb.getClientMongoose()
    );
    this.configureRoutes();
  }
  private configureRoutes() {
    //ruta para method post
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.ambienteController.create(request, response);
      });
    //ruta para method get list ambiente
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.ambienteController.get(request, response);
      });
    //ruta para method get ambiente
    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.ambienteController.getId(request, response);
      });
    //ruta para method update -> put
    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.ambienteController.update(request, response);
      });
    //ruta para method delete
    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.ambienteController.delete(request, response);
      });
  }
}
export default RoutesAmbiente;
//
