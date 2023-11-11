class MovieRepository {
    constructor(database) {
      this.database = database
    }
  
    create(movie) {
      this.database.push(movie)
    }

    getMovieByTitle(title) {
        return this.database.find(movie => movie.title === title)
    }
    
    getMoviesByDirector(director) {
      return this.database.filter(movie => movie.director === director)
    }

    updateMovieById(id, movie) {
        const movieId = this.database.find(movie => movie.id === id)
        if (movieId) {
            Object.assign(id, movie)
        }
        return ("Not possible find id.")
    }

    deleteMovieById(id) {
        const movieId = this.database.find(movie => movie.id === id)
        if (movieId) {
            this.database.splice(id, 1)
        }
        return ("Not possible find id.")
    }
  }

  module.exports = MovieRepository