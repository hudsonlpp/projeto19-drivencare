import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import routes from "./src/routes/index.js";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";

const app = express();

app.use(json())
app.use(cors())
app.use(routes)
app.use(errorMiddleware.handle);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port: ${process.env.PORT ? process.env.PORT : 5000}`)
})