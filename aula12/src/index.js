const TeamRepository = require('./repository/TeamRepository');
const TeamService = require('./service/TeamService');
const {database, client} = require('./database/configDB');

const repository = new TeamRepository(database);
const service = new TeamService(repository);

;(async () => {
    // Example usage
    await service.createTeam('Time da Isa_Moura', 0, 'Esportes Tecnológicos', 10);
    const team = await service.findTeamByName('Time da Isa_Moura');
    console.log(team);
    
    await service.updateTeam(team._id, { points: 10 });

    const teamsOver10Points = await service.findTeamsOver10Points();
    console.log(teamsOver10Points);

    const teamsByCategory = await service.findTeamsByCategory('Esportes Tecnológicos');
    console.log(teamsByCategory);

    await service.deleteTeam(team._id);
    await client.close()
})()