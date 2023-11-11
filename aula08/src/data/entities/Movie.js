const Base = require('./Base');

class Movie extends Base{
    constructor(title, description, releasedAt, director, category) {
        super()
        this.title = title;
        this.description = description;
        this.releasedAt = releasedAt;
        this.director = director;
        this.category = category;
    }
}

module.exports = Movie;