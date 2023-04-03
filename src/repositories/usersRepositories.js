import dataBase from "../config/db.js";

async function findByEmail(email) {
  const result = await dataBase.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result;
}

async function findById(id) {
  const result = await dataBase.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  );
  return result;
}

async function findSessionByToken(token) {
  const result = await dataBase.query(
    `SELECT * FROM sessions WHERE token = $1`,
    [token]
  );
  return result;
}

async function create({ name, email, password }) {
  await dataBase.query(
    `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)  
  `,
    [name, email, password]
  );
}

async function createSession({ token, userId }) {
  await dataBase.query(
    `
    INSERT INTO sessions (token, "userId")
    VALUES ($1, $2)  
  `,
    [token, userId]
  );
}

export default {
  findByEmail,
  findById,
  findSessionByToken,
  create,
  createSession,
};
