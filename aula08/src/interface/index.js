const MovieService = require('../services/movieService')
const ActingService = require('../services/actingService')

// Instanciar o serviço e criar alguns filmes de exemplo
const movieService = new MovieService();

const movie1 = movieService.create('Inception', 'Mind-bending thriller', '2010-07-16', 'Christopher Nolan', 'Sci-Fi');
const movie2 = movieService.create('The Shawshank Redemption', 'Drama about hope and redemption', '1994-09-23', 'Frank Darabont', 'Drama');
const movie3 = movieService.create('The Godfather', 'Classic mafia film', '1972-03-15', 'Francis Ford Coppola', 'Crime');

console.log('Movies in the database:', movie1, movie2, movie3);

// Buscar filme por título
const searchResult = movieService.getMovieByTitle('Inception');
console.log('Search result:', searchResult);

// Buscar filmes por diretor
const moviesByDirector = movieService.getByDirectorName('Christopher Nolan');
console.log('Movies by director:', moviesByDirector);

// Atualizar informações de um filme
const updatedMovie = movieService.updateMovie(movie1.id, { title: 'Inception 2.0', description: 'Mind-bending sequel' });
console.log('Updated movie:', updatedMovie);

// Deletar um filme
const deletedMovie = movieService.deleteMovie(movie1.id);
console.log('Deleted movie:', deletedMovie);

// ---

// Criar instância do serviço
const actingService = new ActingService();

// Criar algumas atuações de exemplo
const acting1 = actingService.create('Leonardo DiCaprio', 'Dom Cobb', 1); 
const acting2 = actingService.create('Morgan Freeman', 'Ellis Boyd "Red" Redding', 2); 

console.log('Actings in the database:', acting1, acting2);

// Buscar atuação por ator/atriz
const searchActingResult = actingService.getActingByActorOrActress('Dom Cobb');
console.log('Search result:', searchActingResult);

// Atualizar informações de uma atuação
const updatedActing = actingService.updateActingById(acting2.id, { role: 'Cobb', movieId: 3 });
console.log('Updated acting:', updatedActing);

// Deletar uma atuação
const deletedActing = actingService.deleteActingById(acting1.id);
console.log('Deleted acting:', deletedActing);