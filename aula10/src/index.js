const BookRepository = require('./repositories/bookRepository');
const BookService = require('./services/bookService');
const {database, client} = require('./database/configDB');

const repository = new BookRepository(database)
const service = new BookService(repository)

;(async () => {
    await service.create('Book 1', 'Description 1', 2023, 'Isa', 'Fiction');   
    console.log(await service.findAll()) 
    console.log(await service.findAllByAuthor('Isa'))
    console.log(await service.findByTitle('Book 1'));
    console.log(await service.update('655d494cac7c19681b938865', {
        title: 'Novo Livro 1',
        description: 'Nova Descrição 1',
        releasedAt: 2023,
        author: 'Isa',
        category: 'Ficção'
    }));
    console.log(await service.findAll()) 
    client.close()
})()