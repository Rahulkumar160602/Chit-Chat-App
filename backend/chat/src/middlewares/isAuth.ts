import type{ Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";
import type{ JwtPayload } from "jsonwebtoken";
interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
}


export interface AuthenticatedRequest extends Request {
    user?: IUser | null;
}

export const isAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) 
: Promise<void> => {
    try{
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "please login Unauthorized" });
            return;
    }
     const token = authHeader.split(' ')[1] as string;
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        if(!decodedValue) {
            res.status(401).json({ message: 'Not authorized, token failed' });
            return;
        }
        req.user = decodedValue.user; // Assuming decodedValue contains user information
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
        
    }
};

export default isAuth;