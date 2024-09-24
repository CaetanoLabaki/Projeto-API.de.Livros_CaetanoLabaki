import {Response, Request, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";

export class IsBookIdValid{
    static execute (req: Request, res: Response, next: NextFunction) {
        if(!booksDatabase.some(book => book.id === Number(req.params.id))){
            throw new AppError(404, "Book not found.")
        }
        
        next();
    }
}

export class IsBookNameUnique {
    static execute(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        const bookExists = booksDatabase.some(book => book.name === name);

        if (bookExists) {
            throw new AppError(409, "Book already registered.");
        }

        next();
    }
}