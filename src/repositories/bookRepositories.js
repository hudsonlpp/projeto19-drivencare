import dataBase from "../config/db.js";

async function createBook({ title, author, userId }) {
  await dataBase.query(
    `INSERT INTO books (title, author, user_id) VALUES ($1, $2, $3)`,
    [title, author, userId]
  );
}

async function findBookByTitle(title) {
  return await dataBase.query(`SELECT * from books WHERE title = $1`, [title]);
}

async function findAllBooks() {
  return await dataBase.query(`
    SELECT b.id, b.title, b.author, b.avaliable, u.name AS "created_by"
    FROM books b JOIN users u ON b.user_id = u.id
  `);
}

export default {
  createBook,
  findBookByTitle,
  findAllBooks,
};
