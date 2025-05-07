import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { userInfo } from "os";

config();
interface UserInfo {
  id: string | number;
}

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (
  inputPassword: string,
  storedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, storedPassword);
};

export const generateToken = (userInfo: UserInfo): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variable");
  }
  return jwt.sign({ id: userInfo.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};
