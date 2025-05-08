import UserService from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import { comparePassword, generateToken, hashPassword } from "../utils/helpers";
import Response from "../utils/response";

export default class AuthController {
  static signup = catchAsync(async (req, res) => {
    const { fullname, email, password, photo } = req.body;
    if (!req.body) {
      return res.json("not present");
    }
    const userExists = await UserService.findUserByEmail(email);
    if (userExists) {
      return Response.error(res, 400, "User already exists", {});
    }
    const hashedPassword = await hashPassword(password);

    const user = await UserService.createUser({
      fullname,
      password: hashedPassword,
      email,
      photo: photo,
    });

    return Response.success(res, 201, "User created", user);
  });

  static login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserService.findUserByEmail(email);
    console.log(user);
    // if(!user || !(await comparePassword(password, user.password))){
    //     return Response.error(res,422,"User not found",{})
    // }
    // const accessToken = generateToken({id: user.id})
  });
}
