const Base = require('./Base');

class Acting extends Base{
    constructor(actorOrActress, role, movieId) {
        super()
        this.actorOrActress = actorOrActress;
        this.role = role;
        this.movieId = movieId;
    }
}

module.exports = Acting;