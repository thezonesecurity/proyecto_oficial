import App from "../../App";
import { Express, Request, Response } from "express";
import SemestreController from "./controllerS/semestreController";

class RoutesS {
  private rootPath: String;
  private mainAppS: App;
  private app: Express;
  private semestreController: SemestreController;
  constructor(rootPath: string, mainAppS: App) {
    this.rootPath = rootPath;
    this.mainAppS = mainAppS;
    this.app = this.mainAppS.getApp();

    this.semestreController = new SemestreController(
      mainAppS.getClientMongoose()
    );

    this.configureRoutesS();
  }
  private configureRoutesS() {
    this.app
      .route(`${this.rootPath}/`)
      .post((request: Request, response: Response) => {
        this.semestreController.create(request, response);
      });
    this.app
      .route(`${this.rootPath}/`)
      .get((request: Request, response: Response) => {
        this.semestreController.get(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .get((request: Request, response: Response) => {
        this.semestreController.getId(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .put((request: Request, response: Response) => {
        this.semestreController.update(request, response);
      });

    this.app
      .route(`${this.rootPath}/:id`)
      .delete((request: Request, response: Response) => {
        this.semestreController.delete(request, response);
      });
  }
}
export default RoutesS;
