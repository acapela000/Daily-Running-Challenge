import { Request, Response } from "express";
import AuthService from "../services/authService";

class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const token = await AuthService.login(req.body);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}

export default new AuthController();
