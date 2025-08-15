import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/index";

class AuthService {
  async register(userData: { name: string; email: string; password: string }) {
    const hashedPassword = await hash(userData.password, 10);
    const newUser = await db.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password_hash: hashedPassword,
      },
    });
    return newUser;
  }

  async login(credentials: {
    email: string;
    password: string;
  }): Promise<string> {
    const user = await db.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await compare(credentials.password, user.password_hash);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "1h" }
    );
    return token;
  }
}

export default new AuthService();
