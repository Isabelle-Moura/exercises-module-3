const Team = require('../domain/Team');

class TeamService {
    constructor(repository) {
        this.repository = repository;
    }

    async createTeam(name, points, category, playersQuantity) {
        const newTeam = new Team(name, points, category, playersQuantity);
        await this.repository.createTeam(newTeam);
    }

    async findTeamByName(name) {
        return await this.repository.findTeamByName(name);
    }

    async findTeamsOver10Points() {
        return await this.repository.findTeamsOver10Points();
    }

    async findTeamsByCategory(category) {
        return await this.repository.findTeamsByCategory(category);
    }

    async updateTeam(id, newTeam) {
        await this.repository.updateTeam(id, newTeam);
    }

    async deleteTeam(id) {
        await this.repository.deleteTeam(id);
    }
}

module.exports = TeamService