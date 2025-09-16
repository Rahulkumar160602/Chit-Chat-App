import { type Request,type NextFunction,type Response } from 'express';
import { type IUser } from '../model/User.js';
 // Adjust the import path as necessary
 import jwt, { type JwtPayload } from 'jsonwebtoken';
export interface AuthenticatedRequest extends Request {
    user?: IUser | null; // Define the type of user if known
}

export const isAuth = async(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<void> => {
    try{
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
             res.status(401).json({ message: 'Not authorized, no token' });
                return;
        }
        const token = authHeader.split(' ')[1] as string;
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        if(!decodedValue || !decodedValue.user) {
            res.status(401).json({ message: 'Not authorized, token failed' });
            return;
        }
        req.user = decodedValue.user; // Assuming decodedValue contains user information
        next();
    } catch (error) {
       
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};