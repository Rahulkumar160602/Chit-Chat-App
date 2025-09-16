import express from 'express';
import { loginUser ,verifyUser,myProfile,getAllUsers,getAUser,updateName} from '../controllers/user.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

router.post("/login",loginUser);

router.post("/verify", verifyUser);

router.get("/me",isAuth,myProfile); // Assuming you want to add a route to get the authenticated user's profile

router.get("/user/all", isAuth,getAllUsers); // Assuming you want to add a route to get all users
router.get("/user/:id",getAUser); // Assuming you want to add a route to get a specific user by ID
router.post("/update/user", isAuth, updateName); // Assuming you want to add a route to update the user's name
export default router;

