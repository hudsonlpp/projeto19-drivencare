import { Router } from "express";
import authenticate from "../middlewares/authMiddleware.js";
import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import { createBook, getAllBooks } from "../controllers/bookControllers.js";
import Book from "../schemas/bookSchemas.js";


const bookRoutes = Router();

bookRoutes.post("/", authenticate, validateSchemaMiddleware(Book), createBook);
bookRoutes.get("/", authenticate, getAllBooks);

export default bookRoutes;

