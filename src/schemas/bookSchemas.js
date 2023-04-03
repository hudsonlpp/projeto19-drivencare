import joi from 'joi';

const Book = joi.object({
    name: joi.string().min(2).required(),
    author: joi.string().required(),
    userId: joi.number(),
    available: joi.boolean().default(true),
  });

export default Book;