import { booksDatabase, generateId } from "../database/database";
import { IBook } from "../interfaces/books.interfaces";

export class BooksServices{
    getBooks(){
        return booksDatabase;
    }

    getOneBook(id: string){
        const findBook = booksDatabase.find(book => book.id === Number(id));
        return findBook;
    }

    createBook(name: string, pages: number, category: string, createdAt: Date, updatedAt: Date ){
        const newBook: IBook = { id: generateId(), name, pages, category, createdAt, updatedAt };
        
        booksDatabase.push(newBook);

        return newBook;
    }

    deleteBook(id: string){
        const index = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(index, 1);        
    }
    
    updateBook(id: string, updateData: Partial<IBook>) {
        const index = booksDatabase.findIndex(book => book.id === Number(id));
        
        const updatedBook = { ...booksDatabase[index], ...updateData, updatedAt: new Date() };
        booksDatabase[index] = updatedBook;

        return updatedBook;
    }

} 