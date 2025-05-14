import UserService from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import { comparePassword, generateToken, hashPassword } from "../utils/helpers";
import Response from "../utils/response";
import {
  validateLogin,
  validateSignup,
} from "../validations/signup.validation";

export default class AuthController {
  static signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password, profile_picture } = req.body;
    validateSignup(req, res, next);
    const userExists = await UserService.findUserByEmail(email);
    if (userExists) {
      return Response.error(res, 400, "User already exists", {});
    }
    const hashedPassword = await hashPassword(password);

    const user = await UserService.createUser({
      fullname,
      password: hashedPassword,
      email,
      profile_picture: profile_picture
        ? profile_picture
        : "https://cdn-icons-png.flaticon.com/512/266/266033.png",
    });

    return Response.success(res, 201, "User created", user);
  });

  static login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    validateLogin(req, res, next);
    const user = await UserService.findUserByEmail(email);
    if (!user || !(await comparePassword(password, user.password))) {
      return Response.error(res, 422, "User not found", {});
    }
    const accessToken = generateToken({ id: user.id });
    return Response.success(res, 200, "Login successful", {
      user,
      accessToken,
    });
  });

  static socialLogin = catchAsync(async (req, res, next) => {});
}
