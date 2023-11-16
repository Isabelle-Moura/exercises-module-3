const BookRepository = require('./repositories/bookRepository');
const BookService = require('./services/bookService');
const {database, client} = require('./database/configDB');

const repository = new BookRepository(database)
const service = new BookService(repository)

;(async () => {
    await service.create({title: 'Book 1', description: 'Description 1', releasedAt: 2023, author: 'Isa', category: 'Fiction'})   
    console.log(await service.findAll()) 
    console.log(await service.findAllByAuthor('Isa'))
    console.log(await service.findByTitle('Book 1'))
    console.log(await service.update(1, {title: 'New Book 1', description: 'New Description 1', releasedAt: 2023, author: 'Isa', category: 'Fiction'}))
    client.close()
})()