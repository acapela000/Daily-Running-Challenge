import { User } from '../models/user';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    async register(userData: { name: string; email: string; password: string }): Promise<User> {
        const hashedPassword = await hash(userData.password, 10);
        const newUser = await User.create({
            data: {
                name: userData.name,
                email: userData.email,
                password_hash: hashedPassword,
            },
        });
        return newUser;
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await User.findUnique({ where: { email } });
        if (user && await compare(password, user.password_hash)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
            return token;
        }
        return null;
    }
}

export default new AuthService();