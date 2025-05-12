import prisma from "../client";

export default class UserService {
  static async createUser(data: any) {
    const users = await prisma.user.create({ data: data });
    return users;
  }

  static async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email: email } });
    console.log(user);
    return user;
  }
}
