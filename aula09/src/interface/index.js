const BookService = require("../services/bookService");  
const Book = require("../data/entities/Book");

const LoanService = require("../services/loanService"); 
const Loan = require("../data/entities/Loan");

const bookService = new BookService();

// Test data
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "1960", "Fiction");

// Test create
const createdBook1 = bookService.create(book1.title, book1.author, book1.year, book1.category);
console.log("Created Book 1:", createdBook1);

const createdBook2 = bookService.create(book2.title, book2.author, book2.year, book2.category);
console.log("Created Book 2:", createdBook2);

// Test getByTitle
const foundBook = bookService.getByTitle("The Hobbit");
console.log("Found Book:", foundBook);

// Test updateBookById
const updatedBook = new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy");
updatedBook.id = createdBook1.id;

const resultUpdate = bookService.updateBookById(createdBook1.id, updatedBook);
console.log("Update Result:", resultUpdate);

// Test deleteBookById
const resultDelete = bookService.deleteBookById(createdBook2.id);
console.log("Delete Result:", resultDelete);

// --- 

const loanService = new LoanService();

// Test data
const loan1 = new Loan("John Doe", "bookId1", "2023-11-11", "2023-12-11");
const loan2 = new Loan("Jane Doe", "bookId2", "2023-11-12", "2023-12-12");

// Test create
const createdLoan1 = loanService.create(loan1.client, loan1.bookByItsId, loan1.loanDate, loan1.returnDate);
console.log("Created Loan 1:", createdLoan1);

const createdLoan2 = loanService.create(loan2.client, loan2.bookByItsId, loan2.loanDate, loan2.returnDate);
console.log("Created Loan 2:", createdLoan2);

// Test getAllByClient
const loansByClient = loanService.getAllByClient("John Doe");
console.log("Loans by Client:", loansByClient);

// Test getAllByBook
const loansByBook = loanService.getAllByBook("bookId2");
console.log("Loans by Book:", loansByBook);

// Test updateLoanById
const updatedLoan = new Loan("John Doe", "bookId1", "2023-11-11", "2023-12-20");
updatedLoan.id = createdLoan1.id;

const resultUpdate2 = loanService.updateLoanById(createdLoan1.id, updatedLoan);
console.log("Update Result:", resultUpdate2);

// Test deleteLoanById
const resultDelete2 = loanService.deleteLoanById(createdLoan2.id);
console.log("Delete Result:", resultDelete2);