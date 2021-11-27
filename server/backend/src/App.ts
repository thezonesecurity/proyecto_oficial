import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
import fileUpload from "express-fileupload";
import UserModule from "./modules/usermodule/init";
import JsonWebToken from "./middleware/JsonWebToken";
import SemestreModule from "./modules/semestremodule/initS";
import AmbienteModule from "./modules/ambientemodule/initAmbiente";
import MateriaModule from "./modules/materiamodule/initMateria";

import cors from "cors";

if (process.env.NODE_ENV == "development") {
  dotenv.config();
}
class App {
  private app: Express;
  private port: number;
  private clientMongo: Mongoose;
  private apiversion: string;
  //private semestreversion: string; //
  private uploadpath: string;
  private jsonwebtoken: JsonWebToken;
  //private apimateria: string;
  constructor() {
    this.app = express();
    this.uploadpath = process.env.UPLOADPATH || "/";
    this.apiversion = process.env.API_VERSION || "api";
    //this.semestreversion = process.env.SEMESTRE_VERSION || "api1"; //
    this.port = Number(process.env.PORT) || 8000;

    this.clientMongo = mongoose;
    this.configureApp();
    this.configureDatabase();
    this.startModules();
    this.jsonwebtoken = new JsonWebToken(this.clientMongo); //aquise aumento el this.clientMongo
  }
  private configureApp() {
    this.app.use(cors({ origin: "http://localhost:3000" }));
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(fileUpload({ limits: { fileSize: 20 * 1024 * 1024 } }));
  }
  private configureDatabase() {
    const dataBaseName = process.env.DB_NAME;
    const dataBaseHost = process.env.DB_HOST;
    const dataBasePort = process.env.DB_PORT;
    const dataBaseUser = process.env.DB_USER;
    const dataBasePassword = process.env.DB_PASSWORD;
    //mongodb://root:example@mongo:27017/
    const connectionString = `mongodb://${dataBaseUser}:${dataBasePassword}@${dataBaseHost}:${dataBasePort}/${dataBaseName}`;
    console.log(connectionString);
    this.clientMongo.connect(connectionString);
    this.clientMongo.connection.on("open", () => {
      console.log("sucess connect to databse.....");
    });
    this.clientMongo.connection.on("error", (err) => {
      console.error("can not connect to the databse....");
      console.error(err);
    });
  }
  private startModules() {
    console.log("Load Modules ...");
    new UserModule(`/${this.apiversion}`, ["user", "roles"], this);
    new MateriaModule(`/${this.apiversion}/materia`, this);
    new SemestreModule(`/${this.apiversion}/semestre`, this);
    new AmbienteModule(`/${this.apiversion}/ambiente`, this);
  }
  public getApp() {
    return this.app;
  }
  // hace peticiones a la base de datos
  public getClientMongoose(): Mongoose {
    return this.clientMongo;
  }
  public getPort(): Number {
    return this.port;
  }
  public getUploadPath(): string {
    return this.uploadpath;
  }
  public getJsonWebToken(): JsonWebToken {
    return this.jsonwebtoken;
  }
}
export default App;
