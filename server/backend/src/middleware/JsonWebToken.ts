import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import { Mongoose } from "mongoose";
import { createModel } from "../modules/usermodule/model/UserModel";
import { IUser } from "../modules/usermodule/model/UserModel";
import UserRepository from "../modules/usermodule/repositories/UserRepository";

export interface DataUserToken {
  id: string;
  email: string;
}
export interface IParams {
  method: string;
  url: string;
}
class JsonWebToken {
  secret: string;
  time: number;
  clientMongo: Mongoose;
  userRepository: UserRepository<IUser>;
  constructor(clientMongo: Mongoose) {
    this.clientMongo = clientMongo;
    this.secret = process.env.TOKENPASSWORD || "secret";
    this.time = Number(process.env.TIME) || 60;

    this.userRepository = new UserRepository<IUser>(
      createModel(this.clientMongo)
    );
  }
  public generateToken(data: DataUserToken) {
    const token: string = JWT.sign(data, this.secret, {
      expiresIn: 60 * this.time,
    });
    console.log("------token-------", token);
    return token;
  }
  public async verifyToken(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const token: string | undefined = request.headers["authorization"];
    if (!token) {
      console.log("TOKEN NO EXISTE");
      response.status(300).json({
        serverResponse:
          "You don't have access to this endpoint you need a token man",
      });
      return;
    }
    //verify the token
    try {
      const decode: any = JWT.verify(token, this.secret);
      if (decode) {
        const params: IParams = { method: request.method, url: request.url };
        console.log("params", params);
        console.log("URL", request.url);
        if (await this.verifyRoles(decode.id, params)) {
          console.log("entro........");
          next();
          return;
        }
        return response.status(300).json({
          serverResponse: "No tiene el permiso para usar este endpoint",
        });
      }
    } catch (error) {
      return response.status(300).json({ serverResponse: "Token invalido" });
    }
  }
  public async verifyRoles(id: string, params: IParams): Promise<Boolean> {
    //no tenemos idea de eso
    const user: IUser | null = await this.userRepository.getUserCompleteData(
      id
    );
    console.log("User", user);
    if (user && user.roles) {
      console.log("User 1");
      for (let rol of user.roles) {
        if (rol.url) {
          console.log("User 2");
          let regularExpression = new RegExp(rol.url, "g");
          if (
            rol.metodoRol?.toUpperCase() === params.method.toUpperCase() && //toUpperCase() es para cambiar de mayuscula a miniscula
            params.url.match(regularExpression) !== null
          ) {
            console.log("todo OK");
            return true;
          }
        }
      }
    }
    console.log("User FALSE");
    return false;
  }
}
export default JsonWebToken;
