const MovieRepository = require('../data/repository/movieRepository')
const Movie = require("../data/entities/Movie")

const database = []
const repository = new MovieRepository(database)

class MovieService {
  create(title, description, releasedAt, director, category) {
    const movie = new Movie(title, description, releasedAt, director, category)
    repository.create(movie)
    return movie
  }
  
  getMovieByTitle(title) {
    return repository.getMovieByTitle(title)
  }

  getByDirectorName(name) {
    return repository.getMoviesByDirector(name)      
  }

  updateMovie(id, movie) {
      return repository.updateMovieById(id, movie)
  }

  deleteMovie(id) {
      return repository.deleteMovieById(id)
  }
}

module.exports = MovieService