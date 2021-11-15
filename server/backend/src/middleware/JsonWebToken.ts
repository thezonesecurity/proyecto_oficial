import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

export interface DataUserToken {
  id: string;
  email: string;
}
class JsonWebToken {
  secret: string;
  time: number;
  constructor() {
    this.secret = process.env.TOKENPASSWORD || "secret";
    this.time = Number(process.env.TIME) || 60;
  }
  public generateToken(data: DataUserToken) {
    const token: string = JWT.sign(data, this.secret, {
      expiresIn: 60 * this.time,
    });
    return token;
  }
  public verifyToken(request: Request, response: Response, next: NextFunction) {
    const token: string | undefined = request.headers["authorization"];
    if (!token) {
      return response.status(300).json({
        serverResponse:
          "You don't have access to this endpoint you need a token man",
      });
    }
    //verify the token
    try {
      const decode: any = JWT.verify(token, this.secret);
      if (decode) {
        console.log(decode);
        this.checkRoles(decode.id);
        next();
        return;
      }
    } catch (error) {
      return response.status(300).json({ serverResponse: "Token invalido" });
    }
  }
  public checkRoles(id: string) {
    //no tenemos idea de eso
  }
}
export default JsonWebToken;
