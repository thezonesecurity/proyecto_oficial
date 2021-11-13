import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import App from "../../../App";
import { createModel, IAvatar, IUser } from "../model/UserModel";
import UserRepository from "../repositories/UserRepository";
import sha1 from "sha1";
import { UploadedFile } from "express-fileupload";

//import UserUpdate from "../dto/UserUpdate.dto";

class UserController {
  private userRepository: UserRepository<IUser>;
  private path: string;
  constructor(app: App) {
    this.userRepository = new UserRepository(
      createModel(app.getClientMongoose())
    );
    this.path = app.getUploadPath();
  }
  //method POST
  public async create(request: Request, response: Response) {
    //body
    let {
      nombre,
      apellidos,
      ci,
      email,
      direccion,
      telefono,
      carga_horaria,
      password,
    } = request.body;
    //cifrar el passwors importante
    const result = await this.userRepository.create({
      nombre,
      apellidos,
      ci,
      email,
      direccion,
      telefono,
      carga_horaria,
      password,
    });
    response.status(201).json({ serverResponse: result });
  }
  public async update(request: Request, response: Response) {
    const { id } = request.params; //el id se controlara en la url
    const {
      nombre,
      apellidos,
      ci,
      email,
      direccion,
      telefono,
      carga_horaria,
    }: IUser = request.body;
    const result = await this.userRepository.update(id, {
      nombre,
      apellidos,
      ci,
      email,
      direccion,
      telefono,
      carga_horaria,
    });
    response.status(201).json({ serverResponse: result });
  }

  public async getId(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.userRepository.findOne(id);
    response.status(201).json({ serverResponse: result });
  }
  public async get(request: Request, response: Response) {
    const result = await this.userRepository.find({});
    response.status(201).json({ serverResponse: result });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.userRepository.delete(id);
    response.status(200).json({ serverResponse: result });
  }
  public async upload(request: Request, response: Response) {
    if (!request.files) {
      return response
        .status(300)
        .json({ serverResponse: "El archivo no fue adjuntado" });
    }
    const { id } = request.params;
    const { avatar }: any = request.files;
    if (avatar == null) {
      return response.status(300).json({
        serverResponse:
          "El archivo debe de ser adjuntado con la etiqueta avatar",
      });
    }
    const img: UploadedFile = avatar;
    const regularexp = /[.](png|jpg|jpeg|gif)/g;
    const ext: Array<string> | null = img.name.match(regularexp);
    if (ext == null) {
      return response.status(300).json({
        serverResponse: "El archivo de ser jpg, png, gif",
      });
    }

    const newname = sha1(img.name || "" + Date.now().toString()) + ext[0];
    const path = this.path + newname;
    img.mv(path, async (err: any) => {
      if (err) {
        return response.status(300).json({
          serverResponse: err,
        });
      }
      const avatarData: IAvatar = {
        url: "/api1.0/user/avatar/" + id,
        path: path,
      };
      const update = await this.userRepository.addAvatar(id, avatarData);
      response.status(200).json({ serverReponse: update });
    });
  }
  public async showavatar(request: Request, response: Response) {
    const { id } = request.params;
    const user: IUser = await this.userRepository.findOne(id);
    if (!user.avatar || user.avatar.length == 0) {
      return response.status(300).json({
        serverResponse: "no avatar",
      });
    }
    const [avatar] = user.avatar;
    response.sendFile(avatar.path);
  }
  public login(request: Request, response: Response) {}
  public singOut(request: Request, response: Response) {}
}
export default UserController;
