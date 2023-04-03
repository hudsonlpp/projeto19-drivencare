import usersServices from "../services/usersServices.js";
import {
    ConflictError,
    InvalidCredentialsError,
} from "../errors/index.js";

async function createUser(req, res, next) {
  const { name, email, password } = req.body;

  try {
    await usersServices.create({ name, email, password });
    res.status(201).send("User created successfully");
  } catch (err) {
    if (err.code === "23505") {
      next(ConflictError("A user with this email already exists"));
    } else {
      next(err);
    }
  }
}

async function signIn(req, res, next) {
  const { email, password } = req.body;

  try {
    const token = await usersServices.signin(email, password);
    res.send({ token });
  } catch (err) {
    if (err.message === "Invalid email or password") {
      next(InvalidCredentialsError("Invalid email or password"));
    } else {
      next(err);
    }
  }
}

export { createUser, signIn };
