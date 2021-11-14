import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
import fileUpload from "express-fileupload";
import UserModule from "./modules/usermodule/init";
import JsonWebToken from "./middleware/JsonWebToken";

if (process.env.NODE_ENV == "development") {
  dotenv.config();
}
class App {
  private app: Express;
  private port: number;
  private clientMongo: Mongoose;
  private apiversion: string;
  private uploadpath: string;
  private jsonwebtoken: JsonWebToken;
  constructor() {
    this.app = express();
    this.uploadpath = process.env.UPLOADPATH || "/";
    this.apiversion = process.env.API_VERSION || "api";
    this.port = Number(process.env.PORT) || 8000;
    this.jsonwebtoken = new JsonWebToken();
    this.clientMongo = mongoose;
    this.configureApp();
    this.configureDatabase();
    this.startModules();
  }
  private configureApp() {
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
    new UserModule(`/${this.apiversion}/user`, this);
  }
  public getApp() {
    return this.app;
  }
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
