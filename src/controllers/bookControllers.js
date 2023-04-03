import bookServices from "../services/bookServices.js";
import { ConflictError} from "../errors/index.js";

async function createBook(req, res, next) {
  const { title, author } = req.body;
  const { userId } = res.locals;

  try {
    await bookServices.create({ title, author, userId });
    res.status(201).send("Book created successfully");
  } catch (err) {
    if (err.code === "23505") {
      next(ConflictError("A book with this title already exists"));
    } else {
      next(err);
    }
  }
}

async function getAllBooks(req, res, next) {
  try {
    const books = await bookServices.getAll();
    res.send({ books });
  } catch (err) {
    next(err);
  }
}

export { createBook, getAllBooks };
