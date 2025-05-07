import { emit } from "process";
import prisma from "../client";

export default class UserService {
  static async createUser(data: any) {
    try {
      const users = await prisma.user.create({ data });
      return users;
    } catch (error) {
      console.log("not working");
    }
  }

  static async findUserByEmail(email: string) {
    try {
      return await prisma.user.findUnique({ where: { email: email } });
    } catch (error) {
      return "Server Error";
    }
  }
}
