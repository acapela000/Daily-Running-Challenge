import { db } from "../db/index";

export class UserService {
  async getUserById(id: string) {
    const user = await db.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      },
    });
    return user;
  }

  async updateUser(id: string, userData: any) {
    const updatedUser = await db.user.update({
      where: { id: parseInt(id) },
      data: userData,
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      },
    });
    return updatedUser;
  }
}
