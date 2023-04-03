import * as errors from "../errors/index.js";

function validateSchemaMiddleware(schema) {
  return (req, res, next) => {
    const { errors: validationErrors } = schema.validate(req.body, { abortEarly: false });
    if (validationErrors) {
      const errorList = validationErrors.map((validationError) => validationError.message);
      throw errors.ConflictError(errorList);
    }
    next();
  };
}

export default validateSchemaMiddleware;
