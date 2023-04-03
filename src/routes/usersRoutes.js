import { Router } from "express";
import { createUser, signIn } from "../controllers/usersControllers.js";
import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import User from "../schemas/usersSchema.js";

const userRoutes = Router();

userRoutes.post("/signup",validateSchemaMiddleware(User), createUser);
userRoutes.post("/signin", signIn);

export default userRoutes;