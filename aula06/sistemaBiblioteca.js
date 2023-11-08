// Sistema de biblioteca
// Entidades
// Livro { titulo descricao ano de lancamento autor categoria }

// Casos de uso
// Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao, ano de lancamento, autor e categoria;
// Deve ser possível buscar um livro pelo titulo
// Deve ser possível buscar todos os livros de um determinado autor
// Deve ser possível atualizar as informacoes de um livro passando o seu id
// Deve ser possível deletar cada livro pelo id

class Book {
    constructor(title, description, year, author, category) {
        this.id = new Date().getTime();
        this.title = title;
        this.description = description;
        this.year = year;
        this.author = author;
        this.category = category;
    }
}

const bookRepository = [];

class Repository {
    constructor(db) {
        this.db = db;
    }

    createBook(data) {
        const book = new Book(data.title, data.description, data.year, data.author, data.category);
        this.db.push(book);
        console.log("Book registered with success.");
    }

    getBookByTitle(title) {
        const book = this.db.find((book) => book.title === title);
        if (book) {
            console.log("Book find:", book);
        } else {
            console.log("It wasn't possible to find book.");
        }
        return book;
    }

    getBooksByAuthor(author) {
        const books = this.db.filter((book) => book.author === author);
        if (books.length > 0) {
            console.log("Found books by author:", books);
        } else {
            console.log("It wasn't possible to find any books from author.");
        }
        return books;
    }

    updateBookById(id, newData) {
        const book = this.db.find((book) => book.id === id);
        if (book) {
            Object.assign(book, newData);
            console.log("Book updated with success.");
        } else {
            console.log("It wasn't possible to find book.");
        }
    }

    deleteBookById(id) {
        const index = this.db.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.db.splice(index, 1);
            console.log("Book deleted with success.");
        } else {
            console.log("It wasn't possible to find book.");
        }
    }
}

// Exemplo de uso:
const repository = new Repository(bookRepository);

repository.createBook({
    title: "Aventuras de Sherlock Holmes",
    description: "Coletânea de histórias de detetive",
    year: 1892,
    author: "Arthur Conan Doyle",
    category: "Mistério"
});

repository.createBook({
    title: "Aventuras de Sherlock Holmes - Parte II",
    description: "Coletânea de histórias de detetive do livro dois",
    year: 1895,
    author: "Arthur Conan Doyle",
    category: "Mistério"
});

const foundBook = repository.getBookByTitle("Aventuras de Sherlock Holmes");

repository.updateBookById(foundBook.id, { description: "Coletânea de histórias de detetive do famoso detetive Sherlock Holmes." });
repository.deleteBookById(foundBook.id);

repository.getBooksByAuthor("Arthur Conan Doyle");
console.log(bookRepository);
