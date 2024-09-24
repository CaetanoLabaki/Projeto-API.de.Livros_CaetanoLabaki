import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid, IsBookNameUnique } from "../middlewares/isBookIdValid.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOneBook)

booksRouter.post("/", IsBookNameUnique.execute,booksControllers.createBook);

booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.deleteProduct);

booksRouter.patch("/:id", IsBookNameUnique.execute, IsBookIdValid.execute, booksControllers.updateBook);
