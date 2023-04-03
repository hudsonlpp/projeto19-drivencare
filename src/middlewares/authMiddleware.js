import userRepository from "../repositories/usersRepositories.js";

async function authenticate(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send("Authorization header is missing");
  }

  try {
    const session = await userRepository.findSessionByToken(token);
    if (!session) {
      return res.status(401).send("Invalid session token");
    }

    const user = await userRepository.findById(session.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.locals.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
}

export default authenticate;
