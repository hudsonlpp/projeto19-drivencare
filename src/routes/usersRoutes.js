import { Router } from "express";
import { createUser, signIn } from "../controllers/usersControllers.js";
import validationSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import user from "../schemas/usersSchema.js";

const userRoutes = Router();

userRoutes.post("/signup",validationSchemaMiddleware(user), createUser);
userRoutes.post("/signin", signIn);

export default userRoutes;