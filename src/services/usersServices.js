import bcrypt from "bcrypt";
import usersRepositories from "../repositories/usersRepositories.js";
import { v4 as uuid } from "uuid";
import * as error from "../errors/index.js";

async function create({ name, email, password }) {
  const { rowCount } = await usersRepositories.findByEmail(email);
  if (rowCount) throw error.conflict("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  await usersRepositories.create({ name, email, password: hashedPassword });
}

async function signin({ email, password }) {
  const {
    rows: [user],
  } = await usersRepositories.findByEmail(email);

  const isValidCredentials = user && (await bcrypt.compare(password, user.password));

  if (!isValidCredentials) throw error.invalidCredentials();

  const token = uuid();
  await usersRepositories.createSession({ token, userId: user.id });
  return token;
}

export default { create, signin };