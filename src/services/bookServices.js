import bookRepositories from "../repositories/bookRepositories.js";
import * as error from "../errors/index.js";

async function create({ name, author, userId }) {
  const {
    rows: [book],
  } = await bookRepositories.findByName(name);
  if (book) throw error.conflict("Book already exists");

  await bookRepositories.create({ name, author, userId });
}

async function findAll() {
  const { rows, rowCount } = await bookRepositories.findAll();
  if (!rowCount) throw error.notFound();
  return rows;
}

export default { create, findAll };