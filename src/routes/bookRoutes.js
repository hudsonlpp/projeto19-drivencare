import { Router } from "express";
import authenticate from "../middlewares/authMiddleware.js";
import validationSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import { createBook, getAllBooks } from "../controllers/bookControllers.js";
import Book from "../schemas/bookSchemas.js";

const bookRoutes = Router();

bookRoutes.post("/", authenticate.validate, validationSchemaMiddleware(Book), createBook);
bookRoutes.get("/", authenticate.validate, getAllBooks);

export default bookRoutes;
